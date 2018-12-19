#!/bin/sh

echo "Building Docker image..."
sudo docker build -t ttchallenge .
echo "Docker Image Built."
echo "running Image..."
docker run -name amirChallenge -p 3000:3000 -d ttchallenge
echo "Image is running..."