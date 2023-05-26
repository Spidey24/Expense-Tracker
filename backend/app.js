const express = require('express')
const cors = require('cors');
const { db }  = require('./db/db')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT
const {readdirSync} = require('fs')
//middleware
app.use(express.json())
app.use(cors({
     //hosting domain
}))

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))


app.get('/',(req,res)=>{
    res.send('Hello World')
})

const server = () => {
    db()
    app.listen(PORT, () =>{
        console.log('Listening to port:',PORT)
    })
}


server()