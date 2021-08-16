#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 键入commit信息
read -p "请输入commit文本：" msg

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 发布流程
git init
git add -A
git commit -m $msg
git push -f git@github.com:webbj97/fe-interview.git master:gh-pages

cd -