const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/celcius', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get("/convert/celcius/:angka",(req,res)=>{
    const celcius = req.params.angka
    const reamur = 4/5 * perseInt(celcius)
    const fahrenheit = (9/5 * perseInt(celcius)) + 32
    const kelvin = perseInt(celcius) + 10

    res.send({
        celcius : celcius,
        result : (
            reamur,
            fahrenheit,
            kelvin
        )
    })
})

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})