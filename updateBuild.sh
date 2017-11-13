#!/bin/bash

echo "Copying build files...."
cp * -r ../metabuilding/websites/brooksmtownsend-react/build/* ./
echo "Gitting and updating"

git status
git add --all
git commit -m "Updated build $(date)"
git pull origin master
git push origin master

echo "You updated your build, woo"
