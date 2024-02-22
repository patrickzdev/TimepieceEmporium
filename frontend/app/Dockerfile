######### Stage 1: Building the App #############
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies based on lockfile
COPY package*.json ./
RUN npm ci

# Copy the rest of your application code. Refer to .dockerignore to avoid node_modules
COPY . .

#Building the app
RUN npm run build

############ Stage 2 : Running the App #################
FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]


