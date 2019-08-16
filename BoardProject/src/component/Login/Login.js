import React, { Component } from 'react';
import Menubar from '../Main/Menubar';
import styled from 'styled-components';

const Login_style = styled.div`
    .Login {
    position: absolute;
    top : 35%;
    left : 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    text-align: center;
}

.Login h2 {
    color : rgb(19, 201, 34);
    border-bottom: 1px solid black;
    font-size: 30px; 
    display: inline-block;
    width :100%;
    margin-bottom: 20px;
    padding: 10px;
}
.login{
    position: relative;
    top: 30px;
    left: 25%;
    display: flex;
}
/* 
.inputs{
    position: relative;
    margin:0;
    left: 20%;
    width: 50%;
} */
.inputs {
    margin-right: 0;
}
.inputs .p div{
    display: inline;
}

input {
    position: relative;
    margin-bottom: 5px;
    margin-left: 10px;  
    background: silver;
    outline: none;
    border: 2px solid silver;
}

.btn{
    color : white;
    font-weight: bold; 
    height: 60px;
    background:rgb(19, 201, 34);
    outline: none;
    cursor: pointer;
    text-align: center;
    border: 2px solid rgb(19, 201, 34);
    border-radius: 2px;
    margin-left: 15px;
    padding: 12px;
}
`;


class Login extends Component {
    render() {
        return (
            <Login_style>
                <Menubar/>
                <form class = "Login" action="Home.html" method="POST">
            <h2>로그인</h2>
            <div class = "login">
                <div class ="inputs">
                    <div class="p"><div>&ensp;아이디(단체명)</div><input type="text"/></div> 
                    <div class="p"><div>&ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호</div><input type="password"/></div>
                </div>
                <input class= "btn" type="submit" value = "로그인"/>
            </div>
        </form>
            </Login_style>
        );
    }
}

export default Login;