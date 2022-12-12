FROM flutter:latest

WORKDIR /app

COPY ./lib /app/lib
COPY ./assets /app/assets

RUN flutter pub get

CMD [ "flutter", "run" ]