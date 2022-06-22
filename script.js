const searchForm = document.querySelector(".search-location")
const cityValue = document.querySelector(".search-location input")






//submit event for the form
searchForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const citySearched = cityValue.value;

    searchForm.reset();

    requestCity(citySearched)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err )
    })


})