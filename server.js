const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const boards = require('./routes/Boards');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.get('/', (req, res) => {
    res.send('홈 입니다.');
});

app.post('/create', (req, res) => {
    console.log(req);
    const {id , password} = req.body;
    console.log(id, password);

})
app.use('/board', boards);

app.listen(port, () => {
    console.log(`welcome on ${port}port`);
})