# Express-Note-Taker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Table of Contents
- [Description](#description)
- [Deployed Application](#deployedapplication)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)

## Description
This project creates a simple Express.js based note app that is able to create, save and delete new notes and exisiting ones. This application uses an express backend and can save and retrieve note data from a JSON file. 

## Deployed Application
[Live Link](https://sarah-express-note-taker.herokuapp.com/)
![Screenshot](/public/assets/images/initalpage.png/)

## Installation
You must first run npm install in order to install the following npm package dependencies as specified in the package.json, as well as well as express.js.

## Usage
* Clone this repository to use this application on local machine.
* To install necessary dependencies, run the following command :
```
npm i
```
* The application will be invoked with the following command :
```
node server.js
```
* Open browser and type `http://localhost:8000/` to run this application from your local machine.

## Features
1. Used 'Express.js' to build server
2. Used 'fs(File System)' module to read and write from 'db.json' file
3. Application is deployed on [heroku](https://www.heroku.com/)

## Technologies
1. [Express.js](https://expressjs.com/)
2. [Node.js](https://nodejs.ord/en/)
3. HTML
4. Javascript
5. CSS
6. NPM

## License
MIT License

Copyright (c) 2021 Sarah Siegel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
