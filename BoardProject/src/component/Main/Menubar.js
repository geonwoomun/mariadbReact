import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    body{
    margin :0;
    padding : 0;
    overflow-x: hidden;
}
h1{
    margin :0;
    text-transform: uppercase;
    font-size:40px;
}
#head{
    width: 100%;
    margin : 0 auto;
    padding : 1px;
}
a {
    text-decoration: none;
    color : #27AE60;
}

nav {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size : 1rem;
    border-bottom: 1px solid black;
}

nav ul {
    display: flex;
}

nav ul li{
    list-style: none;
}

nav ul li a {
    padding : 1rem 0;
    margin : 0 2em;
    position: relative;
    letter-spacing: 1px;
    font-weight: 10;
    color : black;
}
`;

const Menubar = () => {
    return (
        <Menu>
             <nav>
                <h1><a href="Home.html">Logo</a></h1>
                <ul>
                    <li><a href="Con.html">후원하기</a></li>
                    <li><a href="Partner.html">파트너 기업</a></li>
                    <li><a href="board.html">게시판</a></li>
                    <li><a href="Login.html">로그인</a>/</li>
                    <li><a href="Join.html">회원가입</a></li>
                </ul>
            </nav>
        </Menu>
    );
};

export default Menubar;