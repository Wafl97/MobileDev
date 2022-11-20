FROM node

WORKDIR /usr/app

ENV REACT_APP_API_URL http://127.0.0.1:3366/api/v1
ENV REACT_APP_API_KEY VerySecretKey

EXPOSE 3000

COPY ./tsconfig.json ./tsconfig.json
COPY ./public ./public
COPY ./src ./src
COPY ./package.json ./package.json

RUN npm install

CMD ["sh","-c","npm run start"]