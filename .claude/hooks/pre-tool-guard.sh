#!/usr/bin/env bash
# PreToolUse (Bash|Edit|Write): refuse the actions AGENTS.md says need the owner first.
# - editing a real .env file (secrets; .env.example is fine)
# - force-pushing, or skipping git hooks with --no-verify
set -u

input=$(cat)
tool=$(printf '%s' "$input" | jq -r '.tool_name // empty')

deny() {
  jq -n --arg reason "$1" '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: $reason
    }
  }'
  exit 0
}

case "$tool" in
  Edit|Write|MultiEdit)
    file=$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty')
    name=$(basename "$file")
    case "$name" in
      .env.example) ;;
      .env|.env.*)
        deny "Learn to Fly: $name holds secrets and is edited by the owner only. Change .env.example instead, or ask the owner." ;;
    esac
    ;;
  Bash)
    cmd=$(printf '%s' "$input" | jq -r '.tool_input.command // empty')
    if printf '%s' "$cmd" | grep -Eq '(^|[;&|[:space:]])git[[:space:]]+([^;&|]*[[:space:]])?push([[:space:]][^;&|]*)?[[:space:]](--force(-with-lease)?|-f|--mirror|\+[^[:space:]]+)([[:space:]=]|$)'; then
      deny "Learn to Fly: force-pushing needs the owner's go-ahead (AGENTS.md). Push normally, or ask first."
    fi
    if printf '%s' "$cmd" | grep -Eq '(^|[;&|[:space:]])git[[:space:]][^;&|]*--no-verify'; then
      deny "Learn to Fly: don't skip the pre-commit hook. Fix what it reports and commit again."
    fi
    ;;
esac
exit 0
