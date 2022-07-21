package main

import "fmt"

func main() {

	count := 4
	for i := 0; i < count; i++ {
		fmt.Println("Iteration no: ", i)
	}

	scores := [5]int{2, 4, 6, 8, 10}
	//loop through the array
	for index, value := range scores {
		fmt.Printf("%d, %d \n", index, value)
	}
	fmt.Println("------------------")
	for _, value := range scores {
		fmt.Printf("%d \n", value*value)
	}

}

/*

$
$$
$$$
$$$$
$$$$$
$$$$$$
$$$$$$$
$$$$$$$$

pattern



*/
