import React, { Component } from 'react';
import styled from 'styled-components';

const InfoStyle = styled.div`
    .group-info{
        width: 100px;
        height : 100px;
        border-radius: 50%;
        background : #E0E0E0;
        margin: 20px 40px;
        margin-bottom: 5px;
    }
    span{
        padding:0;
        margin-top: 0;
        margin-left: 70px;
    }
`;

class GroupInfo extends Component {
    render() {
        return (
            <InfoStyle>
                <div className = 'group-info'/>
                <span>{this.props.name}</span>
            </InfoStyle>
        );
    }
}

export default GroupInfo;