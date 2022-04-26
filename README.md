# Deploying react application using Github Actions or Docker with other CI tool with own hosts.

Created react app using [Create React App](https://github.com/facebook/create-react-app).

To deploy locally
`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To run tests
`npm test`

To get production build
`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
App is ready to be deployed!

Once code is merged to branches, action workflow gets created.
Two action files are created, one for deploying thru GitHub Actions and other using Dockerfile.
