import React, { Component } from 'react';
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react';

const ButtonStyle = styled.div`
    padding: 20px;
    background-color : white;
    border-radius : 10px;
    transition: all 0.3s;
    position : relative;
    color : black;
    border: 2px solid black;
    cursor: pointer;
    &:hover {
        transform : scale(1.1);
    }
    span {
        position: absolute;
        bottom : 2%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

class Test extends Component {
    render() {
        return (
            <ButtonStyle 
            color='black'>
               <Icon name='github' style={{ fontSize: '50px',
            transform:"translateY(10%)",}}/>
            <span>아무거나</span>
            </ButtonStyle>
        );
    }
}

export default Test;