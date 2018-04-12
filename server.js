const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.use('/', express.static(__dirname + '/build/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/', 'index.html'))
})

app.listen(port, '172.31.13.84', (err) => {
  if (err) {
        return console.log('something bad happened', err)
            }
    console.log('server is listening on ' + port)
})

