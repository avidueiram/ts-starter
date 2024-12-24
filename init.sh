#! /bin/bash
git clone https://github.com/avidueiram/ts-starter.git $1
cd $1
rm -rf .git
git init
git branch -M master
git add .
git commit -m "feat: initial commit"
npm i
echo "Project $1 initialized in $(pwd)"