const PORT = 8080;

const path    = require('path');
const express = require('express');
const app     = express();
app.use('/res', express.static('public'));

app.get('/socket-panel',(req,res)=>{
    res.sendFile( path.join(__dirname, "/public/pages/panel.html") );
    
});
app.get('/',(req,res)=>{
    res.sendFile( path.join(__dirname, "/public/pages/index.html") );

});
app.get('/game',(req,res)=>{
    
});

app.listen(PORT, ()=>{
    console.log(`[EXPRESS]: listening on port: ${PORT}`);
});