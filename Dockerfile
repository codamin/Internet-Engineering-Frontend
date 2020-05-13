# Use the official image as a parent image.
FROM node:current

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD [ "npm", "start" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .


#commands:
# sudo docker build -t [IMAGE_NAME =  a name + version] [LOCATION OF DOCKER FILE]
# sudo docker run -it --publish 3000:3000 --detach --name [CONTAINER_NAME] [IMAGE_NAME]
# docker stop 
