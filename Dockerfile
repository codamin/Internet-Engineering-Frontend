
#####################################
# STAGE ONE: BUILD FRONT_END IMAGE  #
#####################################

# Use the official image as a parent image.
FROM node:alpine as front-stage

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the specified command within the container.
RUN npm run build

#################################
# STAGE TWO: BUILD NGINX IMAGE  #
#################################

FROM nginx:alpine

# Instruct docker to copy built folder from stage one
COPY --from=front-stage /usr/src/app/build/ /usr/share/nginx/html

# Copy nginx configuration file into container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to outside of the container
EXPOSE 80

# Directive tell that nginx should stay in the foreground,
# Because for containers, it is useful as best practice is one process = one container.
CMD ["nginx", "-g", "daemon off;"]


# commands:
# sudo docker build -t [IMAGE_NAME+TAG] [LOCATION OF DOCKER FILE]
# sudo docker run -it --publish 3000:3000 --detach --name [CONTAINER_NAME] [IMAGE_NAME]
# docker stop