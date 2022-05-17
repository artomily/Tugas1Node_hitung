const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/kelvin', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get("/convert/kelvin/:angka",(req,res)=>{
    const kelvin = req.params.angka
    const celcius = perseInt(kelvin) - 273
    const fahrenheit = 9/5 * (perseInt(kelvin)-273) + 32
    const kelvin = 4/5 * (perseInt(kelvin)-273)

    res.send({
        kelvin : kelvin,
        result : (
            celcius,
            fahrenheit,
            reamur
        )
    })
})

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})