#!/usr/bin/env bash
# PostToolUse (Edit|Write): fix lint and formatting on the file Claude just changed, and
# validate content edits. Problems that can't be auto-fixed go back to Claude (exit 2).
set -u

file=$(jq -r '.tool_input.file_path // .tool_response.filePath // empty')
[ -n "$file" ] || exit 0
cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
rel=${file#"$PWD"/}
[ -f "$rel" ] || exit 0

case "$rel" in
  /*|node_modules/*|dist/*|dist-server/*|coverage/*|playwright-report/*|test-results/*) exit 0 ;;
esac

problems=""

case "$rel" in
  *.ts|*.tsx|*.js|*.mjs|*.cjs)
    if ! lint=$(npx --no-install eslint --fix --no-warn-ignored --max-warnings 0 "$rel" 2>&1); then
      problems+="ESLint found problems it could not fix in $rel:"$'\n'"$lint"$'\n'
    fi
    npx --no-install prettier --write --log-level warn "$rel" >/dev/null 2>&1
    ;;
  *.json|*.md|*.yml|*.yaml|*.css|*.html)
    npx --no-install prettier --write --ignore-unknown --log-level warn "$rel" >/dev/null 2>&1
    ;;
esac

case "$rel" in
  content/*.md|content/*.yaml|content/*.yml)
    if ! check=$(npm run -s content:validate 2>&1); then
      problems+="npm run content:validate failed after editing $rel:"$'\n'"$(printf '%s\n' "$check" | grep -E 'ERROR|WARN' | head -20)"$'\n'
    fi
    ;;
esac

if [ -n "$problems" ]; then
  printf '%s' "$problems" >&2
  exit 2
fi
exit 0
