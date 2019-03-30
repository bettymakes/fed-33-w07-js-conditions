// Verify whether your javascript is connected
console.log("Did it work?");


// If you want a primitive way to get user input, you can use the prompt function
var temperatureValue = prompt('Set the temperature');

// var randomNumberWithDecimals = Math.random() * 100;
// var temperatureValue = Math.round(randomNumberWithDecimals);

// Get the temperature element
var temp = document.getElementById("temp");

// Update the temperature element's text to the value in `temp`
// temp.innerText = temperatureValue;
// temp.innerHTML = temperatureValue + "&deg;C";
temp.innerHTML = `${temperatureValue}&deg;C`;

// Get the body element
var body = document.getElementById("weather-app");
body.style.backgroundColor = "tomato";

// Get the paragraph element
var details = document.getElementById("details");
details.innerText = "It's way too hawt 🔥";

// Homework:
// Add an If/else condition
// If the temperature is 50 degrees or higher,
//    1) Change the background color to a red colour
//    2) Update the details text to say "it's too hawt"
// Otherwise (aka else):
//    1) Change the background color to a blue colour
//    2) Update the details text to say "it's too cold"
if (temperatureValue >= 50) {
  body.style.backgroundColor = 'red';
  details.innerText = "It's too hot";
}
else if (temperatureValue >= 15) {
  body.style.backgroundColor = 'lightgrey';
  details.innerText = "It's just right";
}
else {
  body.style.backgroundColor = "blue";
  details.innerText = "It's too cold";
}
