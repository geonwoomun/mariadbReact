import React, { Component } from "react";
import Menubar from "../Main/Menubar";
import styled from "styled-components";
import {Icon} from 'semantic-ui-react';

const JoinStyle = styled.div`
    .main-title {
        color : #27AE60;
        font-size : 25px;
        font-weight: bold;
        margin-left : 40px;
        margin-top : 15px;
    }
    .main{
        display: flex;
        margin: 20px auto;
        justify-content : center;
        text-align: center;
    }
    .main-body{
        border: 1px solid grey;
        width: 300px;
        height: 300px;
    }
    .main-body-icon {
        width : 100px;
        height: 100px;
        border-radius: 50%;
        background : #E0E0E0;
        margin-left: 100px;
        margin-top: 35px;
    
    }
    .main-body-content {
        font-size: 15px;
        color : #999999;
        text-align: center;
        margin-top : 15px;
    }
    .main-body-button{
        background: #27AE60;
        color : white;
        border:none;
        margin-top : 90px;
        width : 120px;
        height: 35px;
        font-weight: bold;
        outline : 0;
        cursor: pointer;
    
    }
`;


class Join extends Component {
  render() {
    return (
      <JoinStyle>
        <Menubar />
        <div className="main-title">회원가입</div>
        <div className="main">
          <div className="main-body">
            <div className="main-body-icon" >
                <Icon name='user' size='big' style={{color:'#27AE60', transform:"translateY(125%) translateX(5%)"}} />
            </div>
            <div className="main-body-content">
              아이디, 패스워드 등록으로 회원가입하기
            </div>
            <button className="main-body-button" >개인 회원가입</button>
          </div>

          <div className="main-body">
            <div className="main-body-icon">
                <Icon name='users' size='big' style={{color:'#27AE60', transform:"translateY(125%) translateX(5%)"}} />
            </div>
            <div className="main-body-content">
              아이디, 패스워드 등록으로 회원가입하기
            </div>
            <button className="main-body-button" >단체 회원가입</button>
          </div>
        </div>
      </JoinStyle>
    );
  }
}

export default Join;
