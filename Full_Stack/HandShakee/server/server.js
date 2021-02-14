const express = require('express');
// const { Socket } = require('socket.io');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket =>{
    console.log("nice to meet you.(shackHand)")
    // console.log(Socket.id)
    
    socket.emit("welcome","ghada")
  
});