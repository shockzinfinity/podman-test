FROM node:12

WORKDIR /usr/src/nodetest

RUN npm i -g nodemon

COPY . .
# COPY package*.json ./

RUN npm i

COPY wait-for-it.sh /wait-for-it.sh

RUN chmod +x /wait-for-it.sh

EXPOSE 3000

CMD ["/wait-for-it.sh", "211.243.42.90:27017", "--", "npm", "run", "start:dev"]