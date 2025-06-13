#!/usr/bin/env bash
echo "💅  Pretting Everything (packages & applications) ..."

prettier --config ./.prettierrc --write './src/**/*.ts{,x}'
