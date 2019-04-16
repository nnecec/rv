package main

var testVar string = "hello"
const testNum int = 3

func main(){
	a, b := 1, 2
	p := &a
	*p = 3
}