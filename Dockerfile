FROM node:17-alpine3.15

# Copy 
COPY package.json package-lock.json .

RUN npm install

COPY . .

RUN npm run build



