FROM oven/bun:1.3.11-alpine AS builder

WORKDIR /usr/src/build

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile --ignore-scripts

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY . .

RUN bun run build

FROM nginx:1.25.3-alpine-slim

COPY --from=builder /usr/src/build/dist /usr/share/nginx/html

COPY deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
