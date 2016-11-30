FROM node:latest
COPY ./package.json /srv/package.json
WORKDIR /srv
RUN npm install
