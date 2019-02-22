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
          
        </Navgroup>
      </Nav>
    )
  }
  
};

export default Navbar;
