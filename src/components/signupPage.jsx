import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Container from './Container';
import logo from './logo_transparent.png';
import { Link } from 'react-router-dom';


const SignupPageStyle = styled.div`
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
.wrapper2{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;
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
  margin-left: 30px;
  margin-top: 15px;
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

h2{
  color: #fff;
  font-size: 14px;
  margin-left: 40px;
}
.wrapper2 input{
  width: 135px;
}
@media(max-width: 720px){
  .right2{
    margin-right: 40px;
  }

}
input{
  border-top: none;
  border-bottom:
  width: 175px;
  height: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-left: 40px;
}
.button{
  background-color: #f1c40f;
  color: #EA2027;
  position: relative;
  top: 60px;
  right: 120px;
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


class signupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }


  render() {
    const { ready, meal } = this.state;
    return(
      <SignupPageStyle>
        <div className="wrapper">
          <div className="left">
            <img style={{ width: '70px', height: '70px' }} src={logo} alt="" />
            <div className="wrapper2">
              <div className="left2">
                <h2>First Name</h2>
                <input type="email" />
              </div>
              <div className="right2">
                <h2>Last Name</h2>
                <input type="name" />
              </div>
            </div>
            <h2>Email</h2>
            <input type="email" />
            <h2>Password</h2>
            <input type="password" />
            <h2>Confirm Password</h2>
            <input type="password" />
            <Link to="/">
              <button className="button">SIGN UP</button>
            </Link>
            <p>Already have an account? <Link to="signin">log in</Link></p>
          </div>
          <div className="right">
            <div className="right">
              <img src={require("../../assets/cake.png")} alt="about image" />
            </div>
          </div>
        </div>
      </SignupPageStyle>
    )
  }
}


export default signupPage;
