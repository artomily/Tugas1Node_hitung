const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/reamur', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get("/convert/reamur/:angka",(req,res)=>{
    const reamur = req.params.angka
    const celcius = 5/4 * perseInt(reamur)
    const fahrenheit = (9/5 * perseInt(reamur)) + 32
    const kelvin = (5/4 * perseInt(reamur)) + 273

    res.send({
        reamur : reamur,
        result : (
            celcius,
            fahrenheit,
            kelvin
        )
    })
})

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})