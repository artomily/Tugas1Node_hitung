const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.post('/bmi', (req, res) => {
    tinggi = parseFloat(req.body.tinggi)
    berat = parseFloat(req.body.berat)

    result = berat / (tinggi * tinggi)

    if (result < 18.5){
        var status = "Kurang"
    } else if ((result > 18.5) && (result <= 25)){
        var status = "Normal"
    } else if ((result > 25) && (result <= 30)){
        var status = "Kegemukan"
    } else if (result > 30){
        var status = "Obesitas"
    }

    console.log(result)

    res.send({
        'Tinggi': tinggi + 'm',
        'Berat': berat + 'kg',
        'bmi' : result,
        'status': status,
    })
})

app.listen(port, () => {
    console.log(`server di port ${port}`)
})