console.log('javascript is loaded up successfully')

// fetch("http://puzzle.mead.io/puzzle").then( (res)=>{

// res.json().then((data)=>{
//     console.log(data)

// })

// })

fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoibmtuaWF6aSIsImEiOiJjbDFkZzVhNGowYm9iM2pueGdpaWhocGY3In0.U887fosBi7X0GVPujlTHsQ&limit=1").then((res,error)=>{

console.log(error)
res.json().then((data)=>{
    console.log(data)
})

})