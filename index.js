const PORT = 80;

const fs      = require('fs');
const path    = require('path');
const express = require('express');
const server_static = require('serve-static');
const app     = express();

app.use("/TemplateData", express.static(path.join(__dirname,"/public/build/TemplateData")));
app.use("/Build", express.static(path.join(__dirname,"/public/build/Build")));
app.use("/res", express.static(path.join(__dirname,"/public")));


app.get('/socket-panel',(req,res)=>{
    res.sendFile( path.join(__dirname, "/public/pages/panel.html") );
    
});
app.get('/',(req,res)=>{
    res.sendFile( path.join(__dirname, "/public/pages/index.html") );

});
app.get('/game',(req,res)=>{
    res.sendFile(path.join(__dirname, "/public/build/index.html"));

});

app.listen(PORT, ()=>{
    console.log(`[EXPRESS]: listening on port: ${PORT}`);

});