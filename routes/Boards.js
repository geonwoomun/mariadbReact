const express = require('express');
const routes = express.Router();

const Board = require('../model/Board');


routes.get('/all', (req, res) => {
    Board.findAll().then((results) => {
        return res.json(results);
    })
    .catch((err) => {
        console.log(err);
    })
});

routes.post('/create', (req, res) => {
    const { boardTitle, boardWriter } = req.body;
    const board = {
        boardTitle,
        boardContent : 'zzzz',
        boardWriter,
    }
    Board.create(board)
    .then(board => {
        res.json({status : board.boardTitle + '등록됨'});
    })
    .catch(err => console.error(err));
});

routes.post('/delete', (req, res) => {
    console.log( req);
    const { boardNo } = req.body;
    console.log(boardNo);
    Board.destroy({
        where : {boardNo}
    })
})

routes.put('/update', (req, res) => {
    console.log(req.body);
    const { boardNo, boardTitle, boardWriter } = req.body.board;
    const board = {
        boardNo,
        boardTitle,
        boardWriter
    }
    Board.update({
        boardTitle : board.boardTitle,
        boardWriter : board.boardWriter
    }, {
        where : {boardNo}
    })
    .then(() => {
        console.log('업데이트 완료');
    })
    .catch(err => {
        console.log(err);
    })
})

routes.get('/content/:boardNo', (req, res) => {
    console.log(req.params);
    const { boardNo }  = req.params;

    Board.findOne({
        where : {boardNo}
    })
    .then((result) => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })
}) 

module.exports = routes;
