import React from "react";

let city = null;

const saveCity = (e) => {  
    // console.log(e.key);
        if (e.key === 'Enter') {
            console.log(e.target.value);
            city= e.target.value;
            console.log(city);
        } else return;
}

console.log(city);

function SearchInput(cityPlace) {  
    return (           
        <input placeholder={cityPlace.placeholder} className = "SearchInput" type="text" onKeyDown={saveCity}></input>
     )
}


export default SearchInput;