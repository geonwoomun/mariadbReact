import React, { Component } from "react";
import Menubar from "../Main/Menubar";
import styled from "styled-components";
import GroupInfo from "./GroupInfo";

const GroupStyle = styled.div`
  .group-main {
    display: flex;
  }
  .group-menu {
    width: 200px;
    height: 300px;
  }
  .group-menu-title {
    font-weight: bold;
    font-size: 20px;
    margin: 15px 10px;
  }
  .group-menu-item {
    margin: 20px 15px;
    border-bottom: 1px solid grey;
    text-decoration: none;
    width: 150px;
    height: 25px;
  }
  .group-menu-item a {
    color: black;
  }
  .group-menu-item a:hover {
    color: #27ae60;
  }

  .group-title {
    margin: 20px;
    display: block;
  }
  .group-title-intro {
    font-weight: bold;
    font-size: 30px;
    color: #27ae60;
  }
  .group-title-subtitle {
    margin-top: 30px;
    color: grey;
    margin-bottom : 0;
  }
  .group-box {
    display: block;
    margin: 20px 10px;
    margin-top : 0;
  }
  .flexBox {
    display: flex;
  }
`;

class Group extends Component {
  render() {
    return (
      <GroupStyle>
        <Menubar />
        <div className="group-main">
          <div className="group-menu">
            <div className="group-menu-title">파트너 기업</div>
            <div className="group-menu-item">
              <a href="www.naver.com">단체 소개</a>
            </div>
          </div>
          <div>
            <div className="group-title">
              <div className="group-title-intro">단체소개</div>
              <div className="group-title-subtitle">
                로고 클릭시 단체 소개 페이지로 이동합니다.
              </div>
            </div>
            <div className="group-box">
              <div className="flexBox">
                <GroupInfo name ='단체1'/>
                <GroupInfo name ='단체2' />
                <GroupInfo name ='단체3'/>
                <GroupInfo name ='단체4'/>
              </div>
              <div className="flexBox">
                <GroupInfo name ='단체5'/>
                <GroupInfo name ='단체6'/>
                <GroupInfo name ='단체7'/>
                <GroupInfo name ='단체8'/>
              </div>
            </div>
          </div>
        </div>
      </GroupStyle>
    );
  }
}

export default Group;
