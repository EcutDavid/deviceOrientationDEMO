const io = require('socket.io')();
io.listen(5000);
console.log('💻 listening on 5000');

io.on('connection', socket => {
  console.log(`User ${socket.id} connected`);

  socket.on('changeOri', ori => {
    console.log(socket.id, ori);
    // It won't works for multi user for sure, PR are wellcome :)
    io.emit('newOri', ori);
  });
});
