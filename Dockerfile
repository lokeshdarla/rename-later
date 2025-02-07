FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

# Run migrations and then start the dev server
CMD npx prisma migrate deploy && npm run dev
