#!/bin/sh

set -e

# install and link libray
yarn install
yarn link

# install and run app
cd example
yarn install
yarn link next-page-decorator-invariant
yarn dev
