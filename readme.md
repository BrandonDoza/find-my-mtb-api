![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Find My Mtb API Overview
The Find My Mtb API is a RESTful web service designed to provide information about various mountain bike models, makes, and descriptions. Built using Express.js and deployed on Vercel, this API offers a simple yet comprehensive interface for accessing data related to mountain bikes.

## Features
Model and Model Information: Retrieve detailed information about different mountain bike models

Bike Features: Information about a bikes suspension travel, wheel size, suggested rider ability, and the terrain it is designed for.

Description: Get descriptive information about each mountain bike model, including its intended use, terrain compatibility, and unique selling points.

Search and Filtering: Search for specific mountain bike models based on criteria such as rider  skill level and the terrain they'd like to ride. 

## Usage

### To interact with the Mountain Bike API, send HTTPS requests to the provided endpoints. 

### ALL ENDPOINTS BEGIN WITH https://find-my-mtb-9n78cpo73-brandon-dozas-projects.vercel.app

- GET /api/v1/bikes     Retrieve a list of all available mountain bike models.

- GET /api/v1/bikes/{id}    Get detailed information about a specific mountain bike model by its unique identifier.

- PATCH /api/v1/bikes/{id}    Update the favorite status of a mountain bike model.

- POST /api/v1/bikes    Add a new mountain bike model to the database. --- COMING SOON!!!!!!

Authentication
Currently, the Mountain Bike API does not require authentication for accessing public endpoints. However, future versions may introduce authentication mechanisms for user-specific actions.

Deployment
The Mountain Bike API is hosted on Vercel, ensuring high availability and scalability. The deployment process is seamless, allowing for rapid updates and enhancements to the API functionality.

## Installation
- git clone `git@github.com:BrandonDoza/find-my-mtb-api.git`  - for SSH
- git clone `https://github.com/BrandonDoza/find-my-mtb-api.git` - for https
- cd find-my-mtb-api
- npm install
- npm start  - to run locally
