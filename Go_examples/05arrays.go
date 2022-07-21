package main

import (
	"fmt"
	"reflect"
)

func main() {
	//declare array
	//var arrayName = [sizeOfArray]datatype[values in array]
	var scores = [4]int{2, 4, 8, 16}

	fmt.Println(scores)
	fmt.Println("Size of array: ", len(scores))
	fmt.Println(reflect.TypeOf(scores))
	fmt.Println(reflect.TypeOf(scores).Kind())

	var scoreSpecific = [10]int{0: 5, 5: 9, 9: 2}
	fmt.Println(scoreSpecific)

}
