# Apollo Next Demo

This project has been forked from [Arunoda's Demo](https://github.com/arunoda/next-apollo-demo) in order to update libraries to the latest version and also implement new features.

## Instructions

### Installation

To run the server (in development mode):

Default port: 5000

```
cd ./server
npm install
npm run dev
```

To run the client (in development mode):

Default port: 3000

```
cd ./client
npm install
npm run dev
```

### Running on Docker

On docker this runs on the same ports as in dev.

```
// Build images
docker-compose up --build

// Start container
docker-compose up -d

// Stop
docker-compose down
```

## List of new features

### Server & Infrastructure

- Fetch list of users from a GraphQL endpoint.
- Add pagination support to the end point.
- Dockerised the server & client.
- Deployed to heroku.

### Frontend

- Add support for styled components & typescript for the next.js app to make it more maintainable and robust.
- Immplementing infinite scrolling for the webpage.
- Dockerised the client.
- A11y feature: Links (phone and email) can be selected with the tab key.

![](https://i.imgur.com/5TXceZf.png)

## Note on Heroku deployments

Could not deploy to Heroku because the free tier is no more available.

## Improvements

In the interest of time there were a few things that were missed from the implementation:

- Debouncing the infinite scrolling backend call. Because the backend response is really fast, multiple calls happen when the user scrolls down rapidly on the website (mostly seen on desktop)
- Figure out how to use React.suspense with styled components.
- Write cypress tests.
- Deployment to an alternate platform instead of Heroku.
