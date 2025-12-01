for (let i = 7; i <= 28; i += 3) {
    if (i === 16 || i === 22) {
        continue;

    }
    console.log(i);
}
let sum = 0;
for (let n = 1; n <= 34; n++) {

    sum = sum + n;
}
console.log(sum);



for (let m = 2; m <= 8; m++) {
    console.log(m);
}

for (let b = 5; b <= 35; b += 4) {
    console.log(b);
}

let jami = 1;
for (let k = 3; k <= 8; k++) {
    jami = jami * k;
}
console.log(jami);


let person = {
    firstname: "beqa",
    lastname: "meparishvili",
    age: 23
};
for (let key in person) {
    console.log(person[key]);
}


/*let fruits = ["apple", "banana", "orange"];
fruits.unshift("grapes");
fruits.push("pineapples");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}*/




let fruits = ["apple", "banana", "orange"];
fruits.unshift("grapes")
fruits.push("pineapples")
for (let i = 0; i < fruits.length; i += 2) {
    console.log(i, fruits[i])

}

//დაბეჭდეთ fruits მასივის ყოველი მეორე ელემენტი და მისი ინდექსი
