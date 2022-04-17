const hbs = require('hbs')
const path = require("path")
const express = require('express')
const location_ = require('./utils/app1')
const port = process.env.PORT  ||  3000;
console.log(path.join(__dirname,'../public')  )
//console.log(__filename)
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
console.log("working")
const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectory))
hbs.registerPartials(partialsPath)
// app.get('', (req, res)=>{
//   res.send('<h1>welcome to the express</h1>');
// })

app.get('', (req, res)=>{

    // if(!req.query.address){
    //     return res.send({
    //         error : "Address not found"
    //     })
    // }

    

    // const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+address+"?unitGroup=metric&key=CA87UNQKR6SMKNLRXAMP2FGZN&contentType=json"


    // request({url: url, json: true}, (error, response)=>{


    //     if(error){
    //         console.log("Failed to connect server.")
    //     }
    //     else if(response.body.error){
    //            console.log("Unable to find location")
    //     }
    
    //     else{
        
    //         //console.log(response.body.description)
    //     loc = response.body.description
    //     res.send({
    //             Location : req.query.address,
    //             forecast :location_.location_(req.query.address),
    //             address : req.query.address
    //         })
    //     }
    
    // })
    // const loc = location_.location_(req.query.address)
    // console.log("forecast is" + loc)
    // res.send({
    //     Location : req.query.address,
    //     forecast :location_.location_(req.query.address),
    //     address : req.query.address
    // })
    res.render('index',{
        title : "Weather app",
        name : "NK"
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title : "Help text",
        message: "This is a message related to help",
        name:"Nk"
    })
})


app.get('/about', (req, res)=>{
    res.render('about', {
        title: "about",
        name : "NK"
    })
})

app.get("/help/*", (req,res)=>{

    res.render('error404', {
        message : "Helped your asked for not found",
        name : "NK"
    })
})

app.get("*", (req, res)=>{

res.render('error404', {
    message : "404 not found",
    name : "NK"
})

})


// app.get('/about', (req, res)=>{
//     res.send({
//         name: "nkniazi",
//         age : 34
//     })
// })

// app.get('/weather', (req, res)=>{
//     res.send({
//         forecast: 'Sky is clear',
//         location: 'Islamabd'
//     }
//     )
// })


app.listen(port, ()=>{
    console.log('Server is up on port '+ port)
})