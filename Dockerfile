FROM node:18-alpine

WORKDIR /app

ADD package.json .

RUN npm install

COPY . /app/

CMD ["npm", "run", "dev"]
