ARG ALPINE_VERSION
ARG NODEJS_VERSION
FROM node:${NODEJS_VERSION}-alpine${ALPINE_VERSION} AS developer
WORKDIR /home/developer/recursive-triangles
USER root
RUN apk add --no-cache git ssh
