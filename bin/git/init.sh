#!/bin/bash

# Run production build before push
echo "[INFO] Copy git hooks"

cd "$(dirname ${BASH_SOURCE})"

gitHooksTarget=../../.git/hooks/

cp ./hooks/* ${gitHooksTarget}

ls ${gitHooksTarget}
