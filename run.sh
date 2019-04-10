#!/bin/bash
case  "$1" in
  "install") echo "Installing dependencies..."
  docker run --rm -v $(pwd):/app -w /app -it node:10.15.3-alpine yarn
  echo "Done!"
  echo "Run 'dev' command to start the server!"
  ;;
  "dev") echo "Starting development server..."
  docker-compose up -d --build
  echo "Done!"
  ;;
  *) docker exec -it teravoz-dashboard-node "${@:1}"
  ;;
esac