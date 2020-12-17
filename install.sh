#!/bin/bash

expand_bg="\e[K"
red_bg="\e[0;101m${expand_bg}"
blue="\e[0;94m"
green="\e[0;92m"
reset="\e[0m"

heading="\e[1;33;4;44m"
success="\e[1;92m"
error="\e[1;31m"

function checkcommand () {
    command -v $1 &> /dev/null
}

function assertcommand () {
    if ! checkcommand $1
    then
        echo -e "${error}${1}${reset} not found, please install it first."
        echo ""
        exit
    fi    
}

########################################################################

echo ""
echo -e "${heading}                        ${reset}"
echo -e "${heading}  ** OS LIBRARY SPA **  ${reset}"
echo -e "${heading}                        ${reset}"
echo ""

assertcommand python3
assertcommand node
assertcommand npm

if ! checkcommand pipenv
then
    python3 -m pip install pipenv
fi

echo "${success}Starting installation${reset}"
echo ""

echo 'Installing API...'
echo ""

cd os_library_api
pipenv install
cd ..

echo 'Installing SPA...'
echo ""

cd os-library-spa
npm install
cd ..

echo 'Installing SPA 3D...'
echo ""

cd os-library-spa-3d
npm install
cd ..

# TODO randomized messages
echo -e "${success}Ready to go -> ./start_*.sh${reset}"
echo ""
