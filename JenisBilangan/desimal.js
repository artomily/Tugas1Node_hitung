const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/desimal', (req,res) => {
    res.send("berhasil menampilkan GET")
})

app.get('/convert/desimal/:angka', (req,res) => {
    let bilangan = req.params.angka
    let desimal = perseInt(bilangan);

    res.send({
        desimal : desimal,
        result: {
            biner : desimal.toString(2),
            octal : desimal.toString(8),
            hexadecimal : desimal.toString(16),
        }
    })
})  

app.listen(port, () =>{
    console.log(`server di port ${port}`)
})