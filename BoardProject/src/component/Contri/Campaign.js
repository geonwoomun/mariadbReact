import React, { Component } from 'react';
import styled from 'styled-components';
import Menubar from '../Main/Menubar';
import CamContent from './CamContent';

const CampaignStyle = styled.div`
  .campaign-main {
    display: flex;
  }
  .campaign-menu {
    width: 200px;
    height: 300px;
  }
  .campaign-menu-title {
    font-weight: bold;
    font-size: 20px;
    margin: 15px 10px;
  }
  .campaign-menu-item {
    margin: 20px 15px;
    border-bottom: 1px solid grey;
    text-decoration: none;
    width: 150px;
    height: 25px;
  }
  .campaign-menu-item a {
    color: black;
  }
  .campaign-menu-item a:hover {
    color: #27ae60;
  }
  .flex-box{
    display: flex;
    margin: 20px 0;
  }
  .campaign-content-title{
    font-weight : bold;
    font-size : 25px;
    color : #27AE60;
    margin : 15px;
  }

`;


class Campaign extends Component {
    render() {
        return (
          <CampaignStyle>
            <Menubar />
            <div className="campaign-main">
              <div className="campaign-menu">
                <div className="campaign-menu-title">파트너 기업</div>
                <div className="campaign-menu-item">
                  <a href="www.naver.com">단체 소개</a>
                </div>
              </div>

              <div className='campaign-content'>
                  <div className='campaign-content-title'>
                      캠페인 후원하기
                  </div>
                  <div className='flex-box'>
                    <CamContent group= '단체명' title='기부 프로그램 제목' date='2' money='10000' percent='70'/>
                    <CamContent group= '단체명' title='기부 프로그램 제목' date='2' money='10000' percent='70'/>
                    <CamContent group= '단체명' title='기부 프로그램 제목' date='2' money='10000' percent='70'/>
                  </div>
              </div>
            </div>
          </CampaignStyle>
        );
    }
}

export default Campaign;