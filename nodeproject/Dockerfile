FROM node:lts
WORKDIR /usr/src/app
COPY . .
RUN  npm install express 
RUN  npm install mssql2
RUN  chmod -R 777 . 
CMD [ "node", "index.js" ]