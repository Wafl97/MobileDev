FROM node:latest

WORKDIR /usr/app

ENV NODE_ENV production

EXPOSE 8080

COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./package.json ./package.json
COPY ./.env.production ./.env.production
COPY ./logs ./logs

RUN npm install 

RUN npm run build

CMD ["sh","-c","npm run start"]