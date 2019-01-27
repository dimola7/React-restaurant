import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Container from './Container';
import logo from './logo_transparent.png';
import { Link } from 'react-router-dom';


const LoginPageStyle = styled.div`
margin: 0px auto;
padding: 0;
width: 100%;
height: 100%;

.wrapper{
display:grid;
grid-template-columns:1fr 2fr;
}
.FormField{
padding-left: 13px;
margin: 20px;
justify-items: center;
}
.FormField__Label{
position: relative;
font-size: 12px;
top: 60px;
display: block;
justify-items: center;
}
.FormField__Input{
position: relative;
outline: none;
font-size: 12px;
top: 60px;
display: block;
background-color: #EA2027;
border: 0px;
border-bottom: 1px solid white;
display: block;
color: #fff;
::placeholder{
  color: rgb(255,255,255, .5)
}
}
.FormField__user{
display:grid;
grid-template-columns:1fr 1fr;  
justify-items: center;

}
.svg{
position: relative;
left: 170px;
top: 100px;
}
h1{
  color: #f1c40f;
  padding-left: 100px;
  padding-top: 30px;
}
.left {
background: #EA2027;
color: #fff;
position: relative;
left: 170px;
font-weight: 700;
}

.left img{
position: relative;
left: 180px;
top: 30px;
}
.right img{
object-fit:contain;
height:95vh;
width:100%;
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
          <div className="img"></div>
            <img style={{ width: '70px', height: '70px' }} src={logo} alt="" />
            <h1>Welcome Back!!</h1>
            <form onSubmit={this.handleSubmit}>
             
            <div className="FormField__user">
                <div className="fname">
                  <label className="FormField__Label" htmlFor="email">Email</label>
                  <input type="email" id="First" className="FormField__Input" placeholder="your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              
              <div>
              </div>
            </form>
            <Link to="/">
            <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="30" viewBox="0 0 245 60">
              <g id="Group_42" data-name="Group 42" transform="translate(-237 -809.144)">
                <rect id="Rectangle_12" data-name="Rectangle 12" width="245" height="60" transform="translate(237 809.144)" fill="#ffba48" />
                <text id="SIGN_UP" data-name="SIGN UP" transform="translate(308 846.144)" fill="#fe5a43" font-size="25" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="0" y="0">LOG IN</tspan></text>
              </g>
            </svg>
            </div>
            </Link>
            
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
