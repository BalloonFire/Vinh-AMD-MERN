# Use the official Node.js image
FROM node:20

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 3030

# Command to run the application
CMD ["npm", "start"]
