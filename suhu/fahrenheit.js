const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/fahrenheit', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get("/convert/fahrenheit/:angka",(req,res)=>{
    const fahrenheit = req.params.angka
    const celcius = 4/9 * (perseInt(fahrenheit)-32)
    const fahrenheit = 5/9 * (perseInt(fahrenheit)-32)
    const kelvin = 5/9 * (perseInt(fahrenheit)-32) + 273

    res.send({
        fahrenheit : fahrenheit,
        result : (
            celcius,
            reamur,
            kelvin
        )
    })
})

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})