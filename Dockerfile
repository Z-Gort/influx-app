# Use Node.js 18
FROM node:18-alpine

# Install Bash, Ruby, Git, and build tools
RUN apk add --no-cache bash ruby ruby-dev build-base git

# Install CocoaPods (in case it’s needed for other iOS-related scripts)
RUN gem install cocoapods

# Set the working directory to /app
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache
COPY myapp/package.json myapp/package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files
COPY myapp .

CMD ["tail", "-f", "/dev/null"]