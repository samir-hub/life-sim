# MyPath 

You can find the deployed project at [getmypathapp.com](https://www.getmypathapp.com/).

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.12.0-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ef273578-6c30-43ff-8a9d-3de936213a53/deploy-status)](https://app.netlify.com/sites/mypath/deploys)

### MyPath

MyPath is dedicated to helping high school students and young adults plan for the future. Although money management is a complicated issue that should be discussed with a professional, MyPath is a useful guide. We make it easy. The user will be asked to answer a few questions and MyPath will create their financial profile.  

### Key Features

- Progressive Web App
- Income and expenses data for dozens of cities
- Ability to compare multiple entries
- Data visualizations

## Tech Stack

### Front End built using:

#### React.js using Redux. Styles using Ant Design and Styled Components

#### [Front-end](https://www.getmypathapp.com/) deployed to Netlify

### Back-End built using: 

#### Java and Spring Boot with a PostgreSQL database

#### [Back-end](https://github.com/samir-hub/life-sim-backend) deployed to Heroku

# Environment Variables

The developer must include the following environmental variables inside a .env file: 

    *  REACT_APP_CLIENT_ID - this is the client ID used for authentication
    *  REACT_APP_CLIENT_SECRET - this is the client secret used for authentication

# Installation Instructions

Fork and clone the repository, run `yarn` and then `yarn start` to get started.

## Documentation

See [Backend Documentation](https://github.com/samir-hub/life-sim-backend) for details on the back-end of this project.