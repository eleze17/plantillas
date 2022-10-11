const express = require('express')
const {Router} = require ('express')
const app = express()
const api = Router()

api.use(express.json())
api.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use('/api',api)

app.set('view engine', 'pug')
app.set('views', './views')
//-------------------------------------------------------



let productos = []

api.get('/productos',(req,res)=>{
   res.render('listado_pug.pug',{productos})
   
})


 api.post('/productos',(req,res)=>{
    let id = productos.length + 1
    req.body.id = id
    productos.push(req.body)
    let prod = req.body
    res.render('productos_pug',{ prod })
    
})



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
