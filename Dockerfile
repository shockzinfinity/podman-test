FROM node:12

WORKDIR /usr/src/nodetest

COPY package*.json ./

RUN npm i -g nodemon

RUN npm i

COPY . .

EXPOSE 8080 3000

CMD ["npm", "run", "start:dev"]