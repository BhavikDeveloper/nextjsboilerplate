#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "PROJECT_ENV: $PROJECT_ENV"

if [[ "$VERCEL_ENV" == "$VERCEL_GIT_COMMIT_REF" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi