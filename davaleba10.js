/*function Numbers(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}
console.log(Numbers(7, 7));



function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));


function Name() {
    console.log("beqa meparishvili");
}
return Name(); 


function fullName(firstname, lastname) {
    return firstname + " " + lastname;
}
console.log(fullName("beqa", "meparishvili"));


function namravli(n) {
    let product = 1;

    for (let i = 1; i <= n; i++) {
        product = product * i;
    }

    return product;
} console.log(namravli(5));
*/

let student = {
    firstName: "Beqa",
    lastName: "Meparishvili",
    age: 20,
    scores: [4, 7, 5, 3, 2],

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());

function sumScores(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }

    return sum;
}
console.log(sumScores(student.scores));
console.log(student.firstName + "   " + student.age);





/*1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და
 ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი
  ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა,
    დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
*/