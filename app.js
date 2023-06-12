const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=57477496cf00481d994103954231206&q=London&aqi=no'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})

