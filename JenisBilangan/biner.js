const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/biner', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get('/convert/biner/:angka', (req,res) => {
    let angka = req.params.angka
    let biner = perseInt(angka, 2);

    res.send({
        biner : angka,
        result: {
            desimal: desimal,
            octal : desimal.toString(8),
            hexadecimal : desimal.toString(16),
        }
    })
})  

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})