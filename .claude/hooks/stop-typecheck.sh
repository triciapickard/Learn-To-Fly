#!/usr/bin/env bash
# Stop: when TypeScript files have uncommitted changes, typecheck before Claude finishes.
# Errors go back to Claude (exit 2) once; a second stop in a row is let through, so the hook
# can never trap a turn in a loop.
set -u

input=$(cat)
[ "$(printf '%s' "$input" | jq -r '.stop_hook_active // false')" = "true" ] && exit 0

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
changed=$(git status --porcelain -- '*.ts' '*.tsx' 2>/dev/null)
[ -n "$changed" ] || exit 0

if ! out=$(npm run -s typecheck 2>&1); then
  {
    echo "npm run typecheck fails with the current changes. Fix these before finishing:"
    printf '%s\n' "$out" | grep -E 'error TS' | head -20
  } >&2
  exit 2
fi
exit 0
