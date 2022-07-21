package main

import (
	"fmt"
	"os"
	"reflect"
	"strconv"
)

func main() {
	fmt.Println(os.Args)
	fmt.Println("Length of Args: ", len((os.Args)))

	sum := 0
	//write a code to find the total of all
	//number arguments which you pass at cli
	for i := 1; i < len(os.Args); i++ {
		fmt.Println(os.Args[i])
		value, _ := strconv.Atoi(os.Args[i])
		fmt.Println(reflect.TypeOf(value))
		//sum += value
		sum = sum + value
	}
	fmt.Println("Sum: ", sum)

}
