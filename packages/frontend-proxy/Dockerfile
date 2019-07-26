FROM mhart/alpine-node:12
RUN apk add --no-cache make gcc g++ python
RUN mkdir -p /prototype-demo
WORKDIR /prototype-demo/packages/frontend-proxy
RUN yarn
EXPOSE 7000
