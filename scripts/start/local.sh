#!/usr/bin/env bash
echo "🚀  Bootstraping the application! ..."

cross-env ENVIRONMENT=local next dev -p 4000
