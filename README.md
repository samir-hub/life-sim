# MyPath

You can find the deployed project at [getmypathapp.com](https://www.getmypathapp.com/).

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.12.0-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ef273578-6c30-43ff-8a9d-3de936213a53/deploy-status)](https://app.netlify.com/sites/mypath/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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

- We chose Node.js due to it's flexibility and quick set up.
- We decided to use GraphQL to query our database because it made setting up complex data shapes simpler.
- We implemented MongoDB with mongoose so we could switch our collections easily without having to alter tables or reset our database with each new version release.

# APIs

## Passport.js with OAuth

Everyone likes an easy sign up process. We chose to go with Passport.js because it allowed users to use their Google login to sign up in seconds and it was a lot easier for the dev team to set up and debug. We started out using Auth0 but quickly found that it wasn't meeting our needs.

## Apollo-Boost

This is a library that allows you to write your GraphQL queries directly in your code just like you would in the Graphiql playground. It's like Axios but made for GraphQL.

## Context API

Apollo-boost limits your global state management options and we found that Context API worked best with our tech stack.

## Ant Design

Our UX team went with Ant Design components in our UX file so we challenged ourselves to learn the design system.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_OPEN_WEATHER_API_KEY - this is your Open Weather API key, which can be generated at https://openweathermap.org/api.
    *  REACT_APP_CLOUDINARY_KEY - Cloudinary upload preset key

# Testing

<strong>Front-end:</strong> React Testing Library with Jest
</br>
<strong>Back-end:</strong> Jest with Supertest

# Installation Instructions

Fork & clone both the front-end and back-end, run `yarn` and then `yarn start` on the front-end and `yarn server` on the back-end.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/ema-therapy-be) for details on the backend of our project.