import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    section {
    top: 3em;
    position: relative;
}
#main {
    width : 35%;
    height: 270px;
    border : 1px solid rgb(19, 201, 34);
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 70%;
    left :35%;
}


#sub {
    width:100%;
    height: 100px;
    top : 100px;
    position: relative;
}
#sub .sub1{
    width : 20%;
    height: 130%;
    border : 1px solid green;
    position : absolute;
    top : 60%;
    left : 30%;
    display:inline-block;
}
#sub .sub2{
    width : 20%;
    height: 100%;
    border : 1px solid rgb(19, 201, 34);
    position : absolute;
    top : 90%;
    left : 55%;
    display:inline-block;
}
#sub .sub3{
    position : absolute;
    top : 50%;
    left : 55%;
    color: rgb(19, 201, 34);
    font-size: 35px;
}
`;

const Body = () => {
    return (
        <Box>
           <section>
        <div id = "main">
            box
        </div>
    </section>
    
    <div id = "sub">
        <div class = "sub1"> box </div>
        <h1 class="sub3">LOGO</h1>
        <div class = "sub2"> box </div>
    </div> 
        </Box>
    );
};

export default Body;