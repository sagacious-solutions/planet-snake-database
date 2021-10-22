
# Starts and reinitializes software and loads logs

pm2 stop "planet-snake-database"
pm2 delete "planet-snake-database"
pm2 flush
pm2 start "yarn start" --name "planet-snake-database" --watch
pm2 logs "planet-snake-database"















