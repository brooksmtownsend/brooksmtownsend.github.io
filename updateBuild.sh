#!/bin/bash

cp * -r ../metabuilding/websites/brooksmtownsend-react/build/* ./
git status
git add --all
git commit -m "Updated build $(date)"
git pull origin master
git push origin master
echo("")
echo("You updated your build, woo")
