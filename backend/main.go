package main

import (
	server "github.com/IEEEDTUCS/vihaan25/backend/internal/server"
)

func main() {
	s := server.NewServer()

	s.Run()
}
