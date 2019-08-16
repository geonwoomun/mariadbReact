import React, { Component } from "react";
import styled from "styled-components";

const Sign = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
      text-align : center;
      font-size: 20px;
      font-weight: bold;
      margin-bottom : 10px;
      color : #2ecc71;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid none;
    border-radius: 4px;
    width : 300px;
    height : 400px;
    background : #55efc4;
  }
  .input-form {
    margin-top: 10px;
  }
  input {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid black;
    padding : 5px;
  }
  label {
    display: block;
    font-size: 15px;
    font-weight: bold;
    color : black;
    margin-bottom : 4px;
  }
  button {
    margin-top: 30px;
    outline: none;
    background: green;
    color: white;
    border-radius: 2px;
    width: 100px;
    height: 30px;
    border: none;
    text-transform: uppercase;
  }
  button:hover {
    background: blue;
  }
`;

class SignUp extends Component {
  render() {
    return (
      <Sign>
        <div class= "title">
            회원가입
        </div>
        <form>
          <div class = "input-form">
            <label>Email</label>
            <input placeholder="Email" type="email" />
          </div>
          <div class = "input-form">
            <label>Password</label>
            <input placeholder="Password" type="Password" />
          </div>
          <div class = "input-form">
            <label>Name</label>
            <input placeholder="Name" type="text" />
          </div>
          <div class = "input-form">
            <label>Phone-Number</label>
            <input placeholder="Phone-Number without -" type="Number" />
          </div>
          <div class = "input-form">
            <label>Email</label>
            <input placeholder="date of birth without -" type="date" />
          </div>
          <button type="submit">submit</button>
        </form>
      </Sign>
    );
  }
}

export default SignUp;
