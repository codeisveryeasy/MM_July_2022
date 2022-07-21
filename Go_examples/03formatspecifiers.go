package main

import "fmt"

func main() {

	score := 88
	topic := "Go programming"
	dayNumber := 9
	name := "Air Asia Academy"

	fmt.Println("I will use format specifier!")
	fmt.Println("I am in new line.")
	// invalid operation. You cannot combine
	//string and int with + operator
	//fmt.Println("Score: " + score)
	fmt.Println("Score: ", score)
	fmt.Println("Topic: ", topic)
	fmt.Println("Day number", dayNumber)
	fmt.Println("Name", name)
	//I am learning Go programming at my day 9 of
	//camp at Air Asia Academy. My score till date
	//is 88

	//I am learning <topic> at my day <dayNumber> of
	//camp at <name>. My score till date
	//is <score>.

	//format specifiers only work with Printf.
	//Printf does not add new line at the end
	fmt.Printf("My score is %d. I love %s. \n", score, topic)
	fmt.Printf("Beginners can also learn %s \n", topic)

	fmt.Printf("I am learning %s at my day %d of camp at %s. My score till date is %d.", topic, dayNumber, name, score)

}
