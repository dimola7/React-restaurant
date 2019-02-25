import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Container from './Container';
import logo from './logo_transparent.png';
import { Link } from 'react-router-dom';


const LoginPageStyle = styled.div`
margin: 0px auto;
padding: 0;

.wrapper{
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top:80px;
  margin-left: 250px;
}
@media(max-width: 720px){
  .wrapper{
    margin-left: 0px;
  }
}
.left{
  background-color: #EA2027;
  height:75vh;
}
@media(max-width: 720px){
  .left{
  margin-left: 70px;
  height: 100%;
  }
}
.left img{
  margin-left: 150px;
  margin-top: 30px;
}
@media(max-width: 720px){
  .left img{
    margin-right: 130px;
  }
}
.right{
  height: 400px;
}
.right img{
  height:75vh;
  width:70%;
}
@media(max-width: 720px){
  .right img{
  height: 0vh;
  width: 0%;
  }
}
h1{
  font-family: 'Montserrat', sans-serif;
  color: #f1c40f;
  text-align: center;
  font-size: 18px;
}
h2{
  color: #fff;
  font-size: 14px;
  margin-left: 80px;
}
input{
  border-top: none;
  border-bottom:
  width: 175px;
  height: 20px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-left: 80px;
}
.button{
  background-color: #f1c40f;
  color: #EA2027;
  position: relative;
  top: 60px;
  left: 130px;
  border: none;
  padding: 10px 27px;
  font-weight: 600;
  cursor: pointer;
}
p{
  margin-top: 80px;
  margin-left: 100px;
  font-size: 12px;
  color: #fff;
}
a{  
  text-decoration: none;
  color: #f1c40f;
}
`;


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
    }
  }


  render() {
    const { ready, meal } = this.state;
    return(
      <LoginPageStyle>
        <div className="wrapper">
          <div className="left">
          <img style={{ width: '80px', height: '80px' }} src={logo} alt="" />
          <h1>Welcome Back!!</h1>
          <h2>Email</h2>
          <input type="email" />
          <h2>Password</h2>
          <input type="password" required/>
          <Link to="/">
          <button className="button">LOG IN</button>
          </Link>
          <p>New to Delish Foods? <Link to="signup">sign up</Link></p>

          </div>
          <div className="right">
            <img src={require("../../assets/cake.png")} alt="about image" />
          </div>
        </div>
      </LoginPageStyle>
    )
  }
}


export default LoginPage;
