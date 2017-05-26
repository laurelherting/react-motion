#!/usr/bin/env bash
set -e

cd /home/ec2-user/node

# install depedencies
npm install

# build dist
npm run build:dist

