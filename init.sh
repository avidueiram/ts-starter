#! /bin/bash
echo "Enter the project name:"
read project_name
git clone https://github.com/avidueiram/ts-starter.git $project_name
cd $project_name
rm -rf .git
git init
git branch -M master
git add .
git commit -m "feat: initial commit"
echo "Project $project_name initialized in $(pwd)"