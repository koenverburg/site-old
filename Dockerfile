# Stage 1
FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2 - Rebuild the source code only when needed
FROM node:alpine AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

#RUN yarn dist

RUN yarn dist && \
    yarn autoclean --force && \
    rm -rf node_modules/webpack node_modules/webpack-dev-middleware node_modules/webpack-hot-middleware
RUN yarn pkg . --targets node14-alpine-x64 --output bin/site

# Stage 3 - Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

#COPY --from=builder /app/next.config.js ./
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/.next ./.next
#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/bin/site ./site

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

CMD ["./site"]

