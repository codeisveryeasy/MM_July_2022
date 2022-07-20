package main

import (
	"fmt"
	"math"
	"reflect"
)

func main() {
	//declare variable
	//var variablename dataype
	var name string
	name = "Air Asia Academy"

	fmt.Println(name)
	fmt.Println(reflect.TypeOf(name))

	var score int
	score = 88
	fmt.Println(score)
	fmt.Println(reflect.TypeOf(score))

	var scoreBig int64
	scoreBig = 888888888888888
	fmt.Println(scoreBig)
	fmt.Println(reflect.TypeOf(scoreBig))

	fmt.Println("Maximum and minimum int8 value")
	fmt.Println(math.MaxInt8, " ", math.MinInt8)

	// var scoreSmall int8
	// scoreSmall = 128
	// fmt.Println(scoreSmall)
	// fmt.Println(reflect.TypeOf(scoreSmall))

	var life float32
	life = 88.88
	fmt.Println(life)
	fmt.Println(reflect.TypeOf(life))
	fmt.Println(math.MaxFloat32)
	fmt.Println(math.MaxFloat64)

	var check bool
	check = true
	fmt.Println(check)
	fmt.Println(reflect.TypeOf(check))

}
