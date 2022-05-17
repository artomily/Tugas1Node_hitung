const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/hexadecimal', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get('/convert/hexadecimal/:angka', (req,res) => {
    let angka = req.params.angka
    let hexadecimal = perseInt(angka, 16);

    res.send({
        hexadecimal : angka,
        result: {
            desimal : hexadecimal,
            biner : hexadecimal.toString(2),
            octal : hexadecimal.toString(8)
        }
    })
})  

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})