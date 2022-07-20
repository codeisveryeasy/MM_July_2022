package main

import (
	"fmt"
	"reflect"
)

func main() {

	//if you declare a variable then use it.
	//go will not allow un-used variables
	//un-used -> declared but not used!
	location := "Kuala Lumpur"
	fmt.Println(location)
	fmt.Println(reflect.TypeOf(location))

	age := 31
	fmt.Println(age)
	fmt.Println(reflect.TypeOf(age))

	score := 31.31
	fmt.Println(score)
	fmt.Println(reflect.TypeOf(score))

	//strictly typed -> if you declare a variable of certain
	//datatype, then it is not possible to store the value
	//of other datatype in that variable.

}
