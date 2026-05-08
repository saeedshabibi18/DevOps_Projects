# Use an official Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Expose application port
EXPOSE 5050

# Start the app
CMD ["node", "server.js"]
