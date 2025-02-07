FROM node:19

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker's cache mechanism
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 8080 for the application
EXPOSE 8080

# Ensure Prisma Client is generated and migrations are run before starting the server
CMD npx prisma generate && npx prisma migrate deploy && npm run dev
