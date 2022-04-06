// // console.log("starting")


// // setTimeout(()=>{
// //  console.log(" 2 second timer")
// // }, 2000)

// // setTimeout(()=>{
// //     console.log(" 0 seconds timer");
// // }, 0)


// // console.log("closing")


// const req = require("request")

// const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/newyork?unitGroup=metric&key=CA87UNQKR6SMKNLRXAMP2FGZN&contentType=json&lang=es"


// req({url: url, json:true}, (error, response)=>{
// //    const data = JSON.parse(response.body)
// //    console.log(data.currentConditions)

//    //console.log(response.body.currentConditions)
//    console.log(  response.body.days[0].description +" It is currently " + response.body.currentConditions.temp + " degrees out. There is " + response.body.currentConditions.precip + "% chance of rain.")
// })



const request = require("request")

// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmtuaWF6aSIsImEiOiJjbDFkZzVhNGowYm9iM2pueGdpaWhocGY3In0.U887fosBi7X0GVPujlTHsQ&limit=1"
console.log("testing ")
function location_(location){

    var loc = ""
    console.log(location)
    console.log("running")
    //console.log(location)
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"?unitGroup=metric&key=CA87UNQKR6SMKNLRXAMP2FGZN&contentType=json"
    request({url: url, json: true}, (error, response)=>{


        if(error){
            console.log("Failed to connect server.")
        }
        else if(response.body.error){
               console.log("Unable to find location")
        }
    
        else{
        
            //console.log(response.body.description)
        loc = response.body.description
        console.log(loc)
        }
    
    })

    console.log("forcast is a"+loc)
    return loc
}


module.exports = {
    location_ :location_
  };
  