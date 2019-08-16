import React, { Component } from 'react';
import Menubar from '../Main/Menubar';
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react';

const ContriStyle = styled.div`
    .contri-main{
        display : flex;
    }
    .contri-menu{
        width : 200px;
        height : 300px;
    }
    .contri-menu-title{
        font-weight: bold;
        font-size : 20px;
        margin : 15px 10px;
    }
    .contri-menu-item{
        margin : 20px 15px;
        border-bottom : 1px solid grey;
        text-decoration: none;
        width : 150px;
        height: 25px;
    }
    .contri-menu-item a{
        color : black;
    }
    .contri-menu-item a:hover  {
        color : #27AE60;
    }
    .contri-subMain-title{
        margin-top: 10px;
        color : #27AE60;
    }
    .contri-subMain-content{
        font-weight: bold;
        font-size : 18px;
        margin-bottom : 5px;
    }
    .contri-subMain-subContent{
        font-size: 12px;
    }
    .contri-subMain-button{
        background : #27AE60;
        border: none;
        color : white;
        width: 200px;
        height : 30px;
        margin-top: 20px;
        display: flex;
        right:0;
        text-align: right;
        border-radius : 4px;
    }
    .contri-subMain-button div{
        margin-top : 5px;
        text-align: left;
    }
    .icon{
        margin-left : 25px;
        right : 0;
    }
`;


class Contri extends Component {
    render() {
        return (
            <ContriStyle>
                <Menubar/>
                <div className='contri-main'>
                    <div className='contri-menu'>
                        <div className='contri-menu-title'>후원하기</div>
                        <div className='contri-menu-item'>
                            <a href='www.naver.com'>후원 안내</a>
                        </div>
                        <div className='contri-menu-item'>
                            <a href='www.naver.com'>캠페인 후원하기</a>
                        </div>
                    </div>
                    <div className='contri-subMain'>
                        <h2 className='contri-subMain-title'>후원 안내</h2>
                        <div className='contri-subMain-content'>
                            따뜻하고 아름다운 세상<br/> 당신의 작은 나눔으로 시작됩니다.
                        </div>
                        <div className='contri-subMain-subContent'>
                            다양한 후원 종류로 망설이셨나요?<br/>
                            원하는 후원을 바로 찾아 후원할 수 있도록 모든 후원종류를<br/>
                            한 곳에 모아두었습니다.
                        </div>
                        <button className='contri-subMain-button'>
                        <div>후원 신청하러 가기</div>
                        <Icon className='icon' name ='caret right' size='big' /></button>
                    </div>

                </div>
            </ContriStyle>
        );
    }
}

export default Contri;