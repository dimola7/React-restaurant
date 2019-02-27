import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_transparent.png';
import styled from 'styled-components';

const Nav = styled.div`
  
`;

const Navgroup = styled.nav`
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 390px;
    margin-bottom: -10px;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 13px;
    grid-gap: 8px;
  }

  .home{
    margin-left: 30px;
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
    color: #f1c40f;
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
}
  
  #menu{
    display: none;
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
  .btn1{
    width: 80px;
    background-color: #fff;
    color: #EA2027;
    border: 0;
    font-size: 12px;
    font-weight: 600;
    margin-top: 12px;
  }
  .btn2{
    height: 30px;
    width: 80px;
    background-color: #fff;
    color: #EA2027;
    border: 0;
    font-size: 12px;
    font-weight: 600;
    margin-top: 12px;
  }
  
.wrapper{
  display: none;
}

#label{
  display: inline-block;
  background-color: #f1e3e64d;
  height: auto;
  // position: absolute;
  border-radius: 3px;
  border: 2px solid #e8e8e8;
  margin: 10px;
  width: auto;
  }
  
}
// .bar{
//   display: none;
// }

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
                <Link to="/feedback">
                  <p>Feedback</p>
                </Link>
            <Link to="/signup">
              <button className="btn1">SIGN UP</button>
            </Link>
            <Link to="/signin">
              <button className="btn2">SIGN IN</button>
            </Link>
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
