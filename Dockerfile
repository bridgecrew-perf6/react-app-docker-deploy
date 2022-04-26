FROM node:16.14.2 as build
WORKDIR /react-app-docker-deploy
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --no-optional
COPY ["./","./"]
RUN npm run build

FROM amazon/aws-cli
COPY --from=build /react-app-docker-deploy/build ./build
RUN aws s3 sync ./build/ s3://react-app-deployment
