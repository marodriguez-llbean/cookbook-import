FROM node:latest

RUN mkdir -p /data

USER node
WORKDIR /home/node

COPY package.json /home/node/package.json
RUN npm install --save @google-cloud/datastore

COPY recipes.json /home/node/recipes.json
COPY client.js /home/node/client.js
COPY Recipe.js /home/node/Recipe.js

CMD ["node", "client.js"]



