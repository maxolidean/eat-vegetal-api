FROM node:13.7.0-alpine3.11

WORKDIR /usr/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

