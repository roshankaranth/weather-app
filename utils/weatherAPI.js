const request = require('request')

const weather_data = (coords, callback) => {
    const weather_api = `http://api.weatherapi.com/v1/current.json?key=57477496cf00481d994103954231206&q=${encodeURIComponent(coords[0])},${encodeURIComponent(coords[1])}&aqi=no`
    request({ url: weather_api, json: true }, (error, response) => {
        if (error) {
            callback(error)
        } else if (response.body.error) {
            callback(response.body.error.message)
        } else {
            callback(undefined, [response.body.current.temp_c, response.body.current.feelslike_c, response.body.location.name])
        }


    })

}

module.exports = { weather_data: weather_data }