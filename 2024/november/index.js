const temp = document.querySelector("#temp");
const form = document.querySelector("form");
const search = form.city.value;
const btn = document.querySelector("button");

const renderation = (content) => {
    if (search === "") {
        alert("Incorrect, Please fill the field");
        return;
    }


    if (search === "New york") {
        temp.textContent = "11°C";
    }

    temp.textContent = content;
}

const fetchInfo = () => {
    try {
        const apiKey = "3bd9b53a9b9d4d36894133733241011";
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        const promise = fetch(url);
        promise.then(response => response.json());
        promise.then(data => console.log(data.main.temp += "℃", data.weather[0].description));
        const Json = promise.json();
        btn.onclick = renderation(Json.weather);
    } catch(error) {
        console.log(`Code Error: ${error}`);
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    fetchInfo();
})