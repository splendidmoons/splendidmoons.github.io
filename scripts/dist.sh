#!/usr/bin/env bash

DIST_DIR=".output/public"
# Relative to DIST_DIR
DOT_GIT="../../../splendidmoons.github.io-dot-git-main"

yarn run nuxt build --prerender
touch "$DIST_DIR/.nojekyll"

cd "$DIST_DIR" || exit 2

ln -s "$DOT_GIT" ".git"

git aa
git cm upd
git push origin main
