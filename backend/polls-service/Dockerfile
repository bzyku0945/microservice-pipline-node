FROM node:24-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

COPY src ./src

RUN npm run build

FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["node", "dist/index.js"]