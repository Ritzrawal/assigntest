const express = require('express');
const app     = express();
const fetch   = require('node-fetch');
var cors = require("cors");

app.use(cors());
 
app.get('/api/shows',cors(), function (req, res) {
    var url = 'http://124.41.240.154:9803/api/nowshowinginfo';
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.send(err);
    });
});
 
const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
});