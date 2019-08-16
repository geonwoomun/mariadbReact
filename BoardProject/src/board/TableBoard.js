import React, { Component } from 'react';
import BoardForm from './BoardForm';
import { getAll, createBoard,updateBoard,deleteBoard } from '../boardFunction/BoardFunction';
import { Link } from 'react-router-dom';

class TableBoard extends Component {
    state = {
        maxNo: '',
        boards: [],
    }
    // handleSaveData = (data) => {
    //     this.setState({
    //         maxNo : this.state.maxNo + 1,
    //         boards : [...this.state.boards, {brdno: this.state.maxNo, brddate: new Date(), ...data}]
    //     })
    // }

    handleRemoveData = (data) => {
        const boardNo = data;
        deleteBoard(boardNo);
        this.getBoards();
}

    handleUpdateData = (target, targetData) => {
        // no 를 받는다. no 와 같은애를 바꾼다.
        // const temp = this.state.boards.map((board) => {
        //     if(board.brdno === No) {
        //         board.brdwriter = targetData.writer;
        //         board.brdtitle =  targetData.title;
        //     }
        //     return board;
        // })
        const targetBoard = {
            boardNo: target,
            boardWriter : targetData.boardWriter,
            boardTitle : targetData.boardTitle
        }
        updateBoard(targetBoard);
        this.getBoards();
       
    }

    componentDidMount() {
        this.getBoards();
    }
    getBoards = _ => { // 게시판 가져올 때 db에서
        getAll()
        .then(res => {
            this.setState({boards : res.data})
        }
           )
        .catch(err => console.error(err));
    }

    InsertBoard = board => { // 새로운거 추가할 때 db 버전
        createBoard(board)
        .then(this.getBoards)
    }
    render() {
        const { boards } = this.state;

        return (
            <>
                <BoardForm InsertBoard = {this.InsertBoard}/>
                <table border = "1">
                    <tbody>
                        <tr align = "center">
                            <td width="50">No.</td>
                            <td width="300">Title</td>   
                            <td width="100">Name</td>     
                            <td width="100">Date</td>
                            <td>삭제버튼</td>
                            <td>업데이트기능</td>
                        </tr>  
                        {
                            boards.map(row => 
                                (<BoradItem key={row.boardNo} row={row} handleRemoveData={this.handleRemoveData} 
                                handleUpdateData = {this.handleUpdateData}/>))
                        } 
                    </tbody>    
                </table>        
            </>
        );
    }
}

class BoradItem extends Component {
    state = {
        boardTitle : '',
        boardWriter: '',
    }
    onClick = (e) => {
        e.preventDefault();
        this.props.handleRemoveData(this.props.row.boardNo);

    }
    onUpdate = (e) => {
        e.preventDefault();
        this.setState({
            boardTitle : e.target.boardTitle,
            boardWriter : e.target.boardWriter, 
        })
        this.props.handleUpdateData(this.props.row.boardNo, this.state);
        this.setState({
            boardTitle : '',
            boardWriter : ''
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <tr>
                <td>{this.props.row.boardNo}</td>
                <td><Link to= {'/board/content/' + this.props.row.boardNo }>{this.props.row.boardTitle}</Link></td>
                <td>{this.props.row.boardWriter}</td>
                <td>{this.props.row.boardDate}</td>
                <td><button type ="button" onClick={this.onClick}>삭제</button></td>
                <td><form onSubmit={this.onUpdate}>
                    <input placeholder="바꿀 제목이름" value={this.state.boardTitle}
                    name = "boardTitle" onChange = {this.onChange}/> 
                    <input placeholder ="바꿀 작가이름" value = {this.state.boardWriter} name ="boardWriter"
                    onChange = {this.onChange}/>
                    <button type="submit">제출</button>
                    </form></td>
            </tr>
        )
    }
}

export default TableBoard;
