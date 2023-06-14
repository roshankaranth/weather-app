const geocode = require('./utils/geocode')
const weatherAPI = require('./utils/weatherAPI')

if (process.argv.length === 2) {
    console.log("Please input a location")
} else {
    const place = process.argv[2]
    geocode.geocoding(place, (error, coords) => {
        if (error) {
            console.log(error)
        } else {
            weatherAPI.weather_data(coords, (error, data) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log(`It is currently ${data[0]} degrees out, but it feels like ${data[1]} in ${data[2]} `)
                }
            })
        }
    })
}




