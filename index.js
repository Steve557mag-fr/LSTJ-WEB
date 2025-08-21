const PORT = 8080;

const fs      = require('fs');
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
    let build_version = "early-wk6";
    fs.readdir(path.join(__dirname, `/public/builds/`), (dt,files)=>{
        
        console.log(files);

        res.sendFile(path.join(__dirname, `/public/builds/${build_version}`));
    });
});

app.listen(PORT, ()=>{
    console.log(`[EXPRESS]: listening on port: ${PORT}`);
});