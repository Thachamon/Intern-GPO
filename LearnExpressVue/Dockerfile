FROM node:alpine
FROM postgres

WORKDIR /app

COPY . / ./
RUN npm install

CMD ["npm", "start"]

EXPOSE 8000
