#!/usr/bin/end sh

set -e

# 打包
npm run docs:build

# 切换到 docs/.vitepress.dist目录
# cd docs/.vitepress/dist

msg="gitee actions自动部署"

git init
git add -A
git commit -m "${msg}"
git config --global http.postBuffer 524288000
# git commit -m "自动部署"
git config --global core.autocrlf false
git push https://github.com/zhangjunjie-cn/docs.git --force master:dist 

# cd -
# rm -rf docs/.vitepress/dist