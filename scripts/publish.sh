#!/bin/sh

yarn test && \
yarn build && \
yarn version -i "$1" && \
npm publish --access public lib
