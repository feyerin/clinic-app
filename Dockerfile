FROM node:18-alpine  AS builder

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

CMD [ "yarn", "start" ]