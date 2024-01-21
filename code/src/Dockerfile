FROM node:14

WORKDIR /usr/src/app/src

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3200

CMD ["node", "app.js"]
