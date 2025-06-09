#!/bin/bash

# Configuration
APP_NAME="YeisonCardona"
DOMAIN="yeisoncardona.com"
DIST_PATH="dist/$APP_NAME/browser"

# Stop execution on error
set -e

# Optional: clean previous build
rm -rf dist/

echo "Building Angular app with base href set to '/'..."
ng build --base-href "/"

echo "Creating CNAME file with custom domain: $DOMAIN"
echo "$DOMAIN" > "$DIST_PATH/CNAME"

echo "Deploying to GitHub Pages from: $DIST_PATH"
npx angular-cli-ghpages --dir="$DIST_PATH"

echo "Deployment completed: https://$DOMAIN"
