const searchForm = document.querySelector(".search-location")
const cityValue = document.querySelector(".search-location input")
const cityName = document.querySelector("#cityName")
const cityTemp = document.querySelector("#temp")
const cityCondition = document.querySelector(".condition")
const cityFeelslike = document.querySelector("#feelslike")
const cityHumidity = document.querySelector("#humidity")
const conditionIcon = document.querySelector("#icon")
const backgroundImage = document.querySelector("#background")
const countryName = document.querySelector(".city-name span")
const card = document.querySelector(".back-card")


const newIcon = document.createElement('img')


//submit event for the form
searchForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const citySearched = cityValue.value;

    requestCity(citySearched)
    .then((data) => {
        
        //updates the city name
        cityName.innerHTML = data.location.name;

        //updates the country name
        countryName.innerHTML = data.location.country
        

        //updates the temperature
        cityTemp.innerHTML = Math.floor(data.current.temp_c) + "\u00B0" + "C"; 

        //updates the condition
        cityCondition.innerHTML = data.current.condition.text;

        //updates the feelslike
        cityFeelslike.innerHTML = Math.floor(data.current.feelslike_c) + "\u00B0" + "C";

        //updates the humidity 
        cityHumidity.innerHTML = data.current.humidity + "%";

        //adds the src of the image from the api to the new image element
        newIcon.src = data.current.condition.icon
        conditionIcon.append(newIcon)

        if(data.current.is_day == 1){
            backgroundImage.src = "img/day_image.svg"
            cityName.classList.add("text-black")
        } else if (data.current.is_day == 0){
            backgroundImage.src = "img/night_image.svg"
            cityName.classList.add("text-white")
        }

        card.classList.remove("d-none")
        
        
        //resets the form
        searchForm.reset();
    })
    .catch((err) => {
        console.log(err)
        alert("THERE IS NO SUCH CITY, PLEASE TRY AGAIN!")
        

    })


})