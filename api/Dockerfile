FROM oven/bun:latest AS base

FROM base AS builder
WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile
RUN bun run build

FROM gcr.io/distroless/base AS runner
WORKDIR /app

COPY --from=builder /app/dist/portfolio-api ./portfolio-api

ENV NODE_ENV=production

EXPOSE 3000

CMD ["/app/portfolio-api"]