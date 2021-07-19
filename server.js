const express = require('express')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 8000

const app = express()
const corsOptions ={
    origin: process.env.PORT,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname,"build", 'index.html'))
})

app.listen(PORT)