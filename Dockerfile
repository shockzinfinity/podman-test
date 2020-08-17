FROM node:12

WORKDIR /usr/src/nodetest

COPY package*.json ./

RUN npm i -g nodemon

RUN npm i

COPY . .

COPY wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh

EXPOSE 3000

CMD ["/wait-for-it.sh", "db:27017", "--", "npm", "run", "start:dev"]