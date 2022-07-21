package main

import "fmt"

func main() {
	score := 98

	if score > 88 {
		fmt.Println("Score is greater than ", 88)
	}

	if score > 88 {
		fmt.Println("Score is greater than ", 88)
	} else {
		fmt.Println("Score is not greater than", 88)
	}

	if score > 88 {
		fmt.Println("Score is greater than ", 88)
	} else if score < 88 {
		fmt.Println("Score is less than ", 88)
	} else {
		fmt.Println("Score is equal to ", 88)
	}

}
