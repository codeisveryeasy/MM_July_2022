package main

import "fmt"

func main() {
	welcome()
	total := addition(4, 9)
	fmt.Println("Total: ", total)

	score, message := doubleItAll(4, "go")
	fmt.Println("Score: ", score)
	fmt.Println("Message: ", message)

	scoreNew, messageNew := doubleItAllNew(13, "Og")
	fmt.Println("Score New: ", scoreNew)
	fmt.Println("Message New: ", messageNew)

}

func welcome() {
	fmt.Println("Welcome to functions in GO lang.")
}

func addition(n1 int, n2 int) int {
	return n1 + n2
}

func doubleItAll(n int, name string) (int, string) {
	doubleN := n * n
	doubleName := name + name
	return doubleN, doubleName
}

func doubleItAllNew(n int, name string) (doubleN int, doubleName string) {
	doubleN = n * n
	doubleName = name + name

	return
}
