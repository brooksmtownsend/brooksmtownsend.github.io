#!/bin/bash

echo "Building new version..."
cd ../metabuilding/websites/brooksmtownsend-react/ && npm run build

echo "Copying build files...."
cp -r build/* ~/brookstownsend.me/
echo "Gitting and updating"

cd ~/brookstownsend.me/ && git status
git add --all
git commit -m "Updated build $(date)"
git pull origin master
git push origin master

echo "You updated your build, woo"
