import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_transparent.png';
import styled from 'styled-components';

const Nav = styled.div`
  margin-bottom: 10px;
`;

const Navgroup = styled.nav`
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 390px;
    margin-bottom: -13px;
  }
  .logo{
    width: 80px;
    height: 80px;
  }
 
  .left{
    margin-left: 100px;
  }
  .wrapper2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 13px;
    grid-gap: 8px;
  }

  .home{
    margin-left: 30px;
    color: EA2027;
  }

  .btn1{
    height: 30px;
    width: 80px;
    background-color: #fff;
    color: #EA2027;
    border: 0;
    font-size: 12px;
    border: 1px solid red;
    font-weight: 600;
    margin-top: 12px;
  }
  .btn2{
    height: 30px;
    width: 80px;
    background-color: #EA2027;
    color: #fff;
    border: 0;
    font-size: 12px;
    border: none;
    font-weight: 600;
    margin-top: 12px;
  }
  a{
    text-decoration: none;
    color: #EA2027;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }
  @media(min-width: 720px){
  .logo3{
    display: none;
  }
  .res{
    display: none;
  }
}
  
  #menu{
    display: none;
  }
  @media only screen 
  and (min-device-width : 768px) and (max-device-width : 1024px){
    .wrapper{
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-gap: 160px;
      margin-bottom: -13px;
    }
    .logo{
      width: 80px;
      height: 80px;
      position: relative;
      right: 70px;
    }
  }
  @media(max-width: 720px) {
  input:checked ~ .wrapper {
    // max-height: 100%;
    // background-color: white;
    width: 100vh;
    display: inline-block;
    position: relative;
    left: -5%;
    margin-top: 39px;
  }
  input:checked ~ .wrapper{
    position: relative;
    left: -5%;         
  }
  .logo3{
    width: 70px;
    height: 70px;
    float: right;
    padding-bottom: 5px;
  }
  .logo{
    display: none;
  }
  .bar{
    display: block;
    background-color: #736e6e33;
    width: 29px;
    height: 2px;
    border-radius: 1px;
    margin: 8px;
  }
  .wrapper2{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 13px;
    grid-gap: 8px;
    margin-left: 90px;
  }
  p{
    display: none;
  }
  .res{
    color: #EA2027;
    margin-top: -90px;
    margin-bottom:70px;
    padding-right: 220px;
  }
  .btn1{
    display: none;
  }
  .btn2{
   display: none;
  }
  
.wrapper{
  display: none;
}
h2{
  font-size: 15px;
  font-weight: 600;
}
h2:hover{
  background-color: #EA2027;
  color: #fff;
  padding: 12px 10px;
}

#label{
  display: inline-block;
  background-color: #f1e3e64d;
  height: auto;
  border-radius: 3px;
  border: 2px solid #e8e8e8;
  margin: 10px;
  width: auto;
  }
}

`; 

class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }
  render(){
    return(
      <Nav>
        <Navgroup>
        <Link to="/"><img src={Logo} className='logo3' alt="logo" /></Link>
          <span>
          <input type="checkbox" id="menu"/>
          <label id="label" htmlFor="menu" >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label> 
          <div className="wrapper">
            <div className="left">
              <Link to="/"><img src={Logo} className='logo' alt="logo" /></Link>
            </div>
            <div className="right">
            <div className="wrapper2">
                <Link to="/">
                  <p className="home">Home</p>
                </Link>
            <Link to="/signup">
              <button className="btn1">SIGN UP</button>
            </Link>
            <Link to="/signin">
              <button className="btn2">SIGN IN</button>
            </Link>
                  <div className="res">
                  <Link to="/">
                    <h2>Home</h2>
                  </Link>
                  <Link to="/signup">
                    <h2>Sign Up</h2>
                  </Link>
                  <Link to="/signin">
                    <h2>Sign In</h2>
                  </Link>
                  </div>
            </div>  

            </div>
            
               
          </div>
          </span>
        </Navgroup>
      </Nav>
    )
  }
  
};

export default Navbar;
