FROM node

WORKDIR /usr/app

EXPOSE 3000

COPY ./tsconfig.json ./tsconfig.json
COPY ./public ./public
COPY ./src ./src
COPY ./package.json ./package.json

RUN npm install

CMD ["sh","-c","npm run start"]