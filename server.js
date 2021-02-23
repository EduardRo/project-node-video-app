


const express = require('express');
const app = express();
const server = require('http').Server(app);
app.set('view engine', 'ejs')

app.get('/', (rq, rs)=>{
    // rs.status(200).send('Server starting');
    rs.render('room');
})



// the server will listen to port 3030
server.listen(3030);

