#! /bin/bash
git clone https://github.com/avidueiram/ts-starter.git $1
cd $1
cp README-template.md README.md
rm -rf .git init.sh README-template.md
perl -pi -e "s/ts-starter/$1/g" README.md
git init
git branch -M master
git add .
git commit -m "feat: initial commit"
bun i
echo "Project $1 initialized in $(pwd)"