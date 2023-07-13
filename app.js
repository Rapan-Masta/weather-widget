let temp; //--------температура
let pressure; // ---тиск
let description; // опис
let humidity; //----вологість
let speed; // ------швидкість вітру
let deg; // --------напрям в градусах
let icon; // ------ іконка, де 10d код іконки

let city = prompt("Введіть своє місто, щоб дізнатись погоду:", "Kyiv");

fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((response) => response.json())
  .then((data) => {
    // Робота з данними
    console.log(data);

    temp = data.main.temp;
    let tempP = document.querySelector(".temp");
    tempP.innerHTML = `Температура: ${temp}`;

    pressure = data.main.pressure;
    let pressureP = document.querySelector(".pressure");
    pressureP.innerHTML = `Тиск: ${pressure}`;

    description = data.weather[0].description;
    let descriptionP = document.querySelector(".description");
    descriptionP.innerHTML = `Ось, що коїться: ${description}`;

    humidity = data.main.humidity;
    let humidityP = document.querySelector(".humidity");
    humidityP.innerHTML = `Вологість: ${humidity}`;

    speed = data.wind.speed;
    let speedP = document.querySelector(".speed");
    speedP.innerHTML = `Швидкість вітру: ${speed}`;

    deg = data.wind.deg;
    let degP = document.querySelector(".deg");
    degP.innerHTML = `Напрям в градусах: ${deg}`;

    icon = data.weather[0].icon;
    let iconBlock = document.querySelector(".icon");
    iconBlock.setAttribute(
      "src",
      `http://api.openweathermap.org/img/w/${icon}`
    );

    console.log(temp, pressure, description, humidity, speed, deg, icon);
    console.log(tempP);
  });
