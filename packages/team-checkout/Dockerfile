FROM mhart/alpine-node:12
RUN apk add --no-cache make gcc g++ python
RUN mkdir -p /prototype-demo
WORKDIR /prototype-demo/packages/team-checkout
RUN yarn
EXPOSE 7004
