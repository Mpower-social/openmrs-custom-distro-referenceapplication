#!/bin/bash
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

export DIR=$(pwd)
echo -e "${BLUE}Working directory:${NC} $DIR"


echo -e "${CYAN}Creating openmrs data directory...${NC}"
mkdir -p "$DIR/openmrs-data/"
cd "$DIR/openmrs-data/"


echo -e "${CYAN}Installing git-lfs...${NC}"
if ! command -v git-lfs &> /dev/null; then
    apt-get update && apt-get install -y git-lfs
fi

echo -e "${CYAN}Cloning repository with git-lfs...${NC}"
git lfs install
git clone https://github.com/mPower-storage/chcp-app-resource.git

echo -e "${CYAN}Extracting modules and openmrs files...${NC}"
cd "$DIR/openmrs-data/chcp-app-resource"
unzip -q ./modules.zip 
unzip -q ./openmrs.zip

echo -e "${CYAN}Setting up database directory...${NC}"
mkdir -p "$DIR/DB/"
mv "$DIR/openmrs-data/chcp-app-resource/openmrs.sql" "$DIR/DB/"
chmod -R 777 "$DIR/DB"

echo -e "${CYAN}Initializing Docker containers...${NC}"
cd "$DIR"
docker compose up -d
sleep 10
docker compose down -v

echo -e "${CYAN}Moving modules...${NC}"
mv "$DIR/openmrs-data/chcp-app-resource/modules" "$DIR/"
chmod -R 777 "$DIR/modules"

echo -e "${CYAN}Cleaning up temporary files...${NC}"
rm -rf "$DIR/openmrs-data/"

echo -e "${CYAN}Starting final Docker containers...${NC}"
docker compose up -d

echo -e "${GREEN}✅ Setup completed successfully!${NC}"
echo -e "${YELLOW}Containers are starting up. Please wait a few moments for them to become fully operational.${NC}"