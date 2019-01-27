import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Container from './Container';
import logo from './logo_transparent.png';
import { Link } from 'react-router-dom';


const SignupPageStyle = styled.div`
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
}
.FormField__Label{
  position: relative;
  font-size: 12px;
  top: 60px;
  display: block;
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

.left {
  background: #EA2027;
  color: #fff;
  position: relative;
  left: 170px;
  font-weight: 700;
}

.left img{
  position: relative;
  left: 30px;
  top: 30px;
}
.right img{
  object-fit:contain;
  height:95vh;
  width:100%;
}
`;


class signupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
    }
  }


  render() {
    const { ready, meal } = this.state;
    return(
      <SignupPageStyle>
        <div className="wrapper">
          <div className="left">

            <img style={{ width: '70px', height: '70px' }} src={logo} alt="" />
            <form onSubmit={this.handleSubmit}>

              <div className="FormField__user">
                <div className="fname">
                  <label className="FormField__Label" htmlFor="email">First Name</label>
                  <input type="email" id="First" className="FormField__Input" placeholder="your name" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="lname">
                  <label className="FormField__Label" htmlFor="email">Last Name</label>
                  <input type="email" id="First" className="FormField__Input" placeholder="your name" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Phone Number</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Confirm Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div>
              </div>
            </form>
            <Link to="/">
            <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 245 60">
              <g id="Group_42" data-name="Group 42" transform="translate(-237 -809.144)">
                <rect id="Rectangle_12" data-name="Rectangle 12" width="245" height="60" transform="translate(237 809.144)" fill="#ffba48" />
                <text id="SIGN_UP" data-name="SIGN UP" transform="translate(308 846.144)" fill="#fe5a43" font-size="25" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="0" y="0">SIGN UP</tspan></text>
              </g>
            </svg>
            </div>
            </Link>
            
          </div>

          <div className="right">
            <img src={require("../../assets/cake.png")} alt="about image" />
          </div>
        </div>
      </SignupPageStyle>
    )
  }
}


export default signupPage;
