FROM node:lts-alpine
WORKDIR /webapp
COPY . .
RUN npm install
RUN rm -rf dist && \
    npm run build && \
    rm -r node_modules src
RUN npm install -g http-server
CMD [ "http-server", "dist" ]
    