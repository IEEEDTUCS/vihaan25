FROM golang:1.24-bullseye AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o build/server .

FROM alpine:latest

WORKDIR /server

COPY --from=builder /app/build/server .

EXPOSE 1323

CMD ["./server"]
