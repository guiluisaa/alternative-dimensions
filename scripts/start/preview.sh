#!/usr/bin/env bash
echo "🚀  Bootstraping the application! ..."

cross-env ENVIRONMENT=preview next dev -p 4000
