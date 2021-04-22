FROM node:12-slim AS development
COPY package.json yarn.lock ./
COPY . .

FROM development AS builder
WORKDIR /app
COPY . .
RUN yarn install \
    && yarn build \
    && yarn install --production

FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json /app/ormconfig.js ./
EXPOSE 8000
ENTRYPOINT [ "/bin/bash", "-c" ]
CMD ["yarn", "start"]
