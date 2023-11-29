#!/usr/bin/env bash

set -x -e

npx tsc

pack_file=pack.tar.gz
server=root@110.66.1.22
server_path=/home/myapp

tar --exclude={'.git','node_modules','.next','logs'} -czvf $pack_file ./

if [[ $1 =~ ^(dev|test)$ ]]; then
  scp $pack_file $server:$server_path
  ssh $server "\
    cd $server_path;\
    tar -xzvf $pack_file -C ./myapp-$1;\
    pm2 reload myapp-$1;\
  "
elif [[ $1 = "prod" ]]; then
  server=root@110.66.1.33
  scp $pack_file $server:$server_path
  ssh $server "\
    cd $server_path;\
    tar -xzvf $pack_file -C ./myapp-$1;\
    pnpm i;\
    pm2 reload myapp-$1;\
  "
fi

rm $pack_file
