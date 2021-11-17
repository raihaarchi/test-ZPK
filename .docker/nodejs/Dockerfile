FROM node:14.11.0-alpine3.10

ARG NEXT_PUBLIC_SVETA_API_URL
ENV NEXT_PUBLIC_SVETA_API_URL=$NEXT_PUBLIC_SVETA_API_URL

WORKDIR /node/app

RUN apk add --no-cache yarn fish bash

COPY ["package.json", "yarn.lock", "/node/app/"]
RUN yarn install

COPY [".eslintrc", ".prettierrc.js", "next.config.js", "next-env.d.ts", ".babel.config.js", "tsconfig.json", "/node/app/"]
COPY public/ public/
COPY src/ src/

RUN yarn build
