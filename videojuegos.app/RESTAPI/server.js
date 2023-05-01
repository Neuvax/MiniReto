const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    database: 'videogames',
    user: '34d5yv45ncv7uhen7w8u',
    host: 'aws.connect.psdb.cloud',
    password: 'pscale_pw_vyFSWARjcHQWi56JEuiYUK6Tu8VycffBt3V6J9Mbv3S',
    ssl: {
        rejectUnauthorized: false
    }
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})