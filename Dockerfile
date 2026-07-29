# Use an official nodejs runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

#COPY the package.json and package-lock.json to the container
COPY package*.json .  

#Install the dependencies
RUN npm install

#COPY the rest of the applpicatipon code
COPY . .

#Expost the port that the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node","./src/server.js"]

