// // alert("working");
// var array = [-1, 2, 3, 4, 5];
// var sum = 0;
// // for (let i = 0; i < array.length; i++) {
// //     sum = sum + array[i];

// // }

// for ()
// console.log("Total sum is " + sum);





// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// var randomImageSource = "imagess/" + randomDiceImage;

// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource2 = "imagess/dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// // // win
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!"

// }
// else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!"

// }
// else {
//     document.querySelector("h1").innerHTML = "Draw!"
// }




// function addition(num1, num2) {
//     // console.log(num1, num2)
//     const sum = num1 + num2;
//     console.log('Sum is', sum);
// }

// const num1 = 12;
// const num2 = 13;

// addition(num1, num2);
// addition(num1, num2);
// addition(num1, num2);



// Bharti Rana Vikrant

// function fullName(firstName, lastName) {

//     return firstName + lastName
// const add = firstName + " " + lastName;
// console.log(add + " " + "Vikrant");
// }

// firstName = "Bharti";
// lastName = "Rana";
// fullName()
// var add = "Vikrant"
// var addition = fullName("Bharti", " Rana" + " " + add);
// console.log(addition);

// fullName(firstName, lastName);





// function multiple(num1, num2) {
//     const multi = num1 * num2;
//     console.log("Answer is", multi);
// }
// const num1 = 3;
// const num2 = 4;
// multiple(num1, num2);






var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}