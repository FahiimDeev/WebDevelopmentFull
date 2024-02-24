// function nice(name){
//     console.log("Hello," + name + " this is me")
//     console.log("Hello," + name + " this is two")
//     console.log("Hello," + name + " this is three")
//     console.log("Hello," + name + " this is four")
// }

function sum(a,b,c=4) {
    // console.log(a+b)
    return a + b + c;
}

out1 = sum(5,6)
out2 = sum(3,6)
out3 = sum(5,2)

console.log("The sum of a and b is: ", out1)
console.log("The sum of a and b is: ", out2)
console.log("The sum of a and b is: ", out3)

const func1 = (x) =>{
    console.log("I am a arrow function", x)
}

func1(34);
func1(354);
func1(64);
