const express = require('express')
// const req = require('express/lib/request')
// const res = require('express/lib/response')


const hbs = require('hbs')
const path = require('path')



const app = express()

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'))



//routing
app.get('/', (req, res) => {
    res.render('index')
})

app.get("/about", (req, res) => {

    res.render('about')
})

app.get("/works", (req, res) => {

    res.render('works')
})

app.get("/photo-gallery", (req, res) => {

    res.render('photo-gallery')
})


app.listen(3000, () => console.log('servidor levantado en 3000') )
 

