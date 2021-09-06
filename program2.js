const express= require('express');
const bodyParser =require('body-parser');
const fs=require('fs');
const WebSocket=require('ws');
const path=require('path');
const wss=new WebSocket.Server({port: 8090});

//var livereload=require('livereload');
//var connectLivereload=require('connect-livereload');
//var liveReloadServer=livereload.createServer();
const pubDirectory=path.join(__dirname, 'public')
//liveReloadServer.watch(pubDirectory);
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
//app.use(connectLivereload());
app.listen(3000, ()=>{console.log('listen at 3000')});


