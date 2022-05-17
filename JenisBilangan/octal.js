const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/octal', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get('/convert/octal/:angka', (req,res) => {
    let angka = req.params.angka
    let octal = perseInt(angka, 8);

    res.send({
        octal : angka,
        result: {
            desimal : octal,
            biner : desimal.toString(2),
            hexadecimal : desimal.toString(16),
        }
    })
})  

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})