const num = +prompt("raqam kiriting");
if(num % 3 == 0 && num % 5 == 0){
alert("FizzBuzz")
}else if(num % 5 == 0){
    alert("Buzz")
}else if(num % 3 == 0){
    alert("Fizz")
}
else{
    alert("siz kiritkan son fizz ham emas buzz ham emas")
}