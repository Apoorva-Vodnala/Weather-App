// Weather API key
let apikey = "519bda4310ffa925f97be3190a8d4c4c";
// url
("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}");
// getting accessing all the html elements
const locationVal = document.getElementById("loc");
const GetBtn = document.getElementById("btn");
const TempVal = document.getElementById("temp");
const DesVal = document.getElementById("weather-des");
const PlaceVal = document.getElementById("loc-des");

// GetBtn.addEventListener(("click",()=>{
//     // console.log(e.target)
//     if(locationVal.value==''){
//         alert("plz enter the loctaion")
//     }else{

// }))

GetBtn.onclick = function () {
  if (locationVal.value === "") {
    alert("Please Enter the Location");
  } else {
    loc = locationVal.value;
    URL = `https//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { name } = data;
        const { feels_like } = data.main;
        const { description } = data.weather[0];
        TempVal.innerText = Math.round(feels_like - 273);
        PlaceVal.innerText = name;
        DesVal.innerText = description;
      })
      .catch(() => {
        alert("Enter a valid Data");
      });
  }
  // locationVal.value=''
};
