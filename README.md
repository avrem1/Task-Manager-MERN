# Task Manager 🗒

The focus of this personal project was to build an app that helps you manage & track your tasks at hand. It can list, add, delete & edit tasks. The goal was to also explore various deployment and infra concepts. 

## Tech Stack

- Front End -> React + Chakra UI
- Back End  -> Express (NodeJS)
- Database  -> NoSQL (MongoDB) + Mongoose ODM

## Deployment & Infrastructure

- The static front end content was uploaded into an **AWS S3 bucket** to serve the purpose of hosting.
- To improve distribution and content delivery speeds, I decided to use **AWS CloudFront (CDN)** with the origin set as the S3 bucket.
- The backend node server in running on an **AWS EC2** instance with one of the ports opened up for TCP traffic.

# Future Scope

- Add authentication to enable multiple users to manage their tasks on the app.
- Add load balancers
- Configuring a reverse proxy like Nginx
- Containerize the application and explore orchrestration tools like Kubernetes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


