var numbers=[100,200,239,579]
for(i=0;i<=numbers.length-1;i++){
    console.log(numbers[i]);
}

// while loop

var i=0
while(i<=numbers.length-1){
    console.log(numbers[i]);
    i++;
}

// do while loop
var i=0
do{
    console.log(numbers[i]);
    i++
}while(i<=numbers.length-1)


// for of loop
var numbers=[100,69,89,45]
for( number of numbers)
console.log(number);

// deleting Array
var cities=["banglore","kolkatta","chennai", "u"];
cities.splice(3)
cities.splice(2)
cities.splice(1)
cities.splice(0)
cities.splice(-1)
console.log(cities);