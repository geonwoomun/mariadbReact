import React, { Component } from 'react';
import styled from 'styled-components';

const CamContentStyle = styled.div`
    .cam-box{
        width : 150px;
        height : 180px;
        border : 1px solid black;
        margin : 10px 30px;
        border-radius: 2px;
    }
    .cam-box-img{
        height: 90px;
        border-bottom: 1px solid black;
    }
    .cam-box-contents{
        height : 60px;
        border-bottom: 1px solid black;
        text-align: left;
    }

    .cam-box-contents .title{
        font-size: 13px;
        font-weight: bold;
    }
    .cam-box-contents .subCon{
        font-size: 11px;
        color : grey;
    }
    .cam-box-footer {
        display:flex;
        margin-bottom: 0;
        text-align:end;
    }
    .cam-box-footer .money{
        font-size: 11px;
        color : grey;
        margin-left: 45px;
    }
    .cam-box-footer .date{
        font-size: 8px;
        color : grey;
    }
`;

class CamContent extends Component {
    render() {
        return (
            <CamContentStyle>
                <div className='cam-box'>
                    <div className='cam-box-img'>

                    </div>
                    <div className='cam-box-contents'>
                        <span className='title'>{this.props.title}</span><br/>
                        <span className='subCon'>{this.props.group}</span>
                    </div>
                    <div className='cam-box-footer'>
                        <span className='date'>{this.props.date}일 남음</span>
                        <span className='money'>{this.props.money}원 {this.props.percent}%</span>
                    </div>
                </div>
            </CamContentStyle>
        );
    }
}

export default CamContent;