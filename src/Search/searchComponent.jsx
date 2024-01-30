import React from "react";

let city = null;

const saveCity = (e) => {  
    // console.log(e.key);
        if (e.key === 'Enter') {
            city= e.target.value;
            getWeather();
        } else return;
}

async function getWeather() {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8c7ec1160112bc24e56eab17b3dbed79`);
    console.log(weather);
    const json = await weather.json();
    console.log(json);
    console.log(json.city.name)
    let arr = json.list;
    let datearr = arr.shift();
    console.log(datearr);
    let date = new Date(datearr.dt_txt);
    console.log(date);
    let day = date.getDay();
    const weeksdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log(weeksdays[day]);
    return(json);
}



console.log(city);

function SearchInput(cityPlace) {  
    return (           
        <input placeholder={cityPlace.placeholder} className = "searchInput" type="text" onKeyDown={saveCity}></input>
     )
}


export default SearchInput;