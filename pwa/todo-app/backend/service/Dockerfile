FROM node:latest

WORKDIR /usr/app

ENV NODE_ENV production

EXPOSE 3366

COPY ./src ./src
COPY ./tsconfig.json ./tsconfig.json
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./.env.production ./.env.production

RUN npm install 

RUN npm run build

CMD ["sh","-c","npm run start"]