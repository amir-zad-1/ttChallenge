#!/bin/sh

echo "[i] Building Docker image..."
sudo docker build -t ttchallenge .
echo "[i] Docker Image Built."
echo "[i] running Image..."
sudo docker run -p 3000:3000 -d ttchallenge
echo "[i] Image is running on port 3000..."