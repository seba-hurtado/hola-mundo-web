#!/bin/bash
INPUT=$(cat)
if echo "$INPUT" | grep -qE "rm -rf /|DROP TABLE|git push --force"; then
  echo "Comando bloqueado por política de seguridad" >&2
  exit 2
fi
exit 0