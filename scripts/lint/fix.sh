#!/usr/bin/env bash
echo "🚨🩹  Linting code with fix! ..."

eslint src --max-warnings=0 --fix
