FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn 

EXPOSE 5001

ENV NODE_ENV=prod

CMD ["npm", "run", "start"]