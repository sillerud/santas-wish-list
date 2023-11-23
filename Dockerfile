FROM node:21-alpine

WORKDIR /app
ADD node_modules/ /app/node_modules
ADD server/ /app/server
ADD package.json /app


ENTRYPOINT ["node", "server/index.js"]
