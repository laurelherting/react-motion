#!/usr/bin/env bash
set -e

source ~/.bash_profile

cd /home/ec2-user/node

sudo pm2 start server.js

