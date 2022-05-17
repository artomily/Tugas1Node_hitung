const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.post('/convert/bmi', (req, res) => {
    let t = req.body.tinggi
    let b = req.body.berat

    let height = perseFloat(t)
    let weight = perseFloat(b)
    
    let bmi = weight / (height * height)
    let status

    if (bmi < 18.5){
        status = "Kurangg"
    } else if ((bmi > 18.5) && (bmi <= 25)){
        status = "Normal"
    } else if ((bmi > 25) && (bmi <= 30)){
        status = "Kelebihan Berat Badan"
    } else if (bmi > 30){
        status = "Obesitas"
    }

    console.log(bmi)

    res.send({
        tinggi : height + 'm',
        berat: weight + 'kg',
        bmi : bmi,
        status : status,
    })
})

app.listen(port, () => {
    console.log(`server di port ${port}`)
})