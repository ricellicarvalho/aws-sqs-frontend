FROM node:lts-alpine3.17

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm","start"]
