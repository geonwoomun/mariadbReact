import React, { Component } from "react";
import styled from 'styled-components';
import { getBoardContent } from '../boardFunction/BoardFunction';

const Style = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);

    .BoardHead {
        display: flex;
        border: 1px solid black;
        width : 400px;
        height : 30px;
        align-items : center;
        justify-content : center;
     
    }
    .HeadItem {
        margin : 0 12%;
        text-align : center;
    }
    .BoardContent{
        border: 1px solid black;
        text-align : center;
    }
    .ContentHead {
        border-bottom : 1px solid black;
        height: 40px;
        text-align : center;
        line-height : 40px;
    }
    .Content {
        height: 200px;
    }
    

`

class BoardContent extends Component {
  state = {
    boardNo : '',
    boardContents: '',
    boardWriter: '',
    boardTitle: ''
  };

  componentDidMount() {
      // 넘버를 넘겨주고  getBoardContent에서 넘버에 대한 내용을 찾아서 
      // 넘어온 정보를 setState를 시키면 된다.
      const { boardNo } = this.props.match.params;
      getBoardContent(boardNo)
      .then(res => {
          this.setState({
              boardNo,
              boardContents : res.data.boardContent,
              boardWriter : res.data.boardWriter,
              boardTitle : res.data.boardTitle,

          })
      })

  }
  render() {
    const {boardNo, boardContents, boardWriter, boardTitle } = this.state;
    return (
      <Style>
        <div className = "BoardHead">
          <div className ="HeadItem">No</div>
          <div className ="HeadItem">Title</div>
          <div className ="HeadItem">Writer</div>
        </div>
        <div className="BoardHead">
            <div className ="HeadItem">{boardNo}</div>
            <div className ="HeadItem">{boardTitle}</div>
            <div className ="HeadItem">{boardWriter}</div>
        </div>
        <div className = "BoardContent">
            <div className = "ContentHead">Content</div>
            <div className = "Content">{boardContents}</div>
        </div>
      </Style>
    );
  }
}

export default BoardContent;
