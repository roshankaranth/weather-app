const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/iusdbfidsubvisdbisdu.json?access_token=pk.eyJ1Ijoicm9zaHJvc2giLCJhIjoiY2xpdTJvMWJyMWtvdzNrbngxYWIxbjlpZSJ9.Z3ip8Do2ijKHDcpw2K7qCw'


request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log(error)
    } else if (response.body.features.length == 0) {
        console.log("Unable to convert to coordinates")
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]

        console.log(`latitude : ${latitude} longitude : ${longitude}`)
    }

})

// const url1 = 'http://api.weatherapi.com/v1/current.json?key=57477496cf00481d994103954231206&q=18.5204,73.8567&aqi=no'

// request({ url: url1, json: true }, (error, response) => {
//     if (error) {
//         console.log(error)
//     } else if (response.body.error) {
//         console.log(response.body.error.message)
//     } else {
//         console.log(`It is currently ${response.body.current.temp_c} degrees out, but it feels like ${response.body.current.feelslike_c} in ${response.body.location.name} `)
//     }


// })
