FROM node:18-alpine

WORKDIR /src

COPY . .

RUN npm install

EXPOSE 4500

CMD ["npm", "start"]