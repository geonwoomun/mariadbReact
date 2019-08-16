import axios from 'axios';

export const getAll = async () => { // 서버에 db에 있는 게시판 내용 요청하는 것.
    return await axios
    .get('/board/all')
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err);
    })
}


export const createBoard = async (board) => { // db에 추가하자고 서버에 요청
    console.log(board);
    return await axios
    .post('/board/create', {
        boardTitle : board.boardTitle,
        boardWriter : board.boardWriter
    })
    .catch(err => {
        console.log(err);
    })
}

export const updateBoard = async (board) => {
    return await axios
    .put('/board/update' , {
        board
    })
    .catch(err => {
        console.log(err);
    })
}

export const deleteBoard = async (boardNo) => {
    return await axios
    .post('/board/delete', {
        boardNo : boardNo,
    })
    .catch(err => {
        console.log(err);
    })
}

export const getBoardContent = async (boardNo) => {
    return await axios
    .get(`/board/content/${boardNo}`)
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => {
        console.log(err);
    }) 
}