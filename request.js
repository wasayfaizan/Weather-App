//API KEY
const key = '555b2e25585947dbaef185335222206'

const requestCity = async (cityInput) => {
const baseURL = "https://api.weatherapi.com/v1/current.json"
const query = `?key= `+ key+ ` + &q= ` + cityInput + `&aqi=no`

// makes promise call and returns the data
const res = await axios.get(baseURL+query)
console.log(res.data)
return res.data
}