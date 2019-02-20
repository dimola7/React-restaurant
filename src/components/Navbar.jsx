import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_transparent.png';
import styled from 'styled-components';

const Nav = styled.div`
  
  a img{
    width: 200px;
    height: 30px;
    float: left;
    padding: 5px;
  }
  
  .collapse::after{
    content:'';
    clear:both;
    display:table;
  }
  .navlinks a{
    text-decoration-line: none;
    display: block;
    text-align: center;
    font-size: 15px;
    padding: 5px;
    background-color: #b7c2f1;
    color: #EA2027;
    animation: fadeInLeft .6s both;
    &:nth-child(even){
      background: #EA2027;
      color: #b7c2f1;
    }
    
  }
  .rm-navlinks{
    display:none;
  }
  @media (min-width:768px){
    .nav_respond{
      display:none;
      background-color: blue;
    }
    
  }
  @keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
`;

const Navgroup = styled.nav`
  display:none
  @media (min-width:768px){
    padding: 0px 0;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-items: center;
    width:100%;
  }
  @media (max-width:768px){
    padding: 0px 0;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-items: center;
    width:100%;
  }
  a {
    font-size: 14px;
    color: #EA2027; 
    margin:-10px;
  }

  input#menu {
    display: none;
}
  a button {
    height: 30px;
    width: 80px;
    background-color: #fff;
    color: #EA2027;
    border: 0;
    font-size: 12px;
    float: right;
    border: 1px solid red;
  }
  .logo2{
    width: 90px;
    height: 90px;
  }
  @media(max-width: 900px){
    .logo2{
      width: 70px;
      height: 70px;
    }
  }
  .collapsible-menu {
    background-color: transparent;
    padding: 0px 30px;
    border-bottom: 3px solid transparent;
}
.collapsible-menu a {
  display:block;
  color: black;
  padding: 10px;
  text-decoration: none;
}
.collapsible-menu label {
  font-family: 'Sedgwick Ave Display', cursive;
  min-height: 6.2vh;
  width: 5px;
  font-size: 56px;
  display: block;
  position: absolute;
  left: 10%;
  top: 1%;
  cursor: pointer;
  background-size: 35px 50px;
  margin-left: 70%;
  padding: 0px 0 10px 50px;
  border: 3px solid #f0f0f0;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
}
.icon-bar{
  display: block;
  background-color: #888888;
  width: 29px;
  height: 2px;
  border-radius: 1px;
  margin: 8px 0 8px -38px;
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
        <input type="checkbox" id="menu" />
        <label for="menu">
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </label>
        <Navgroup>
          <Link to="/"><img src={Logo} className='logo2' alt="logo" /></Link>
          <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="35" viewBox="0 0 245 60">
  <g id="Group_42" data-name="Group 42" transform="translate(-237 -809.144)">
    <rect id="Rectangle_12" data-name="Rectangle 12" width="245" height="60" transform="translate(237 809.144)" fill="#fff" />
    <text id="SIGN_UP" data-name="SIGN UP" transform="translate(308 846.144)" fill="#fe5a43" border= "1px solid red" font-size="30" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="0" y="0">Home</tspan></text>
  </g>
</svg>
          </Link>
          <Link to="/feedback">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="35" viewBox="0 0 245 60">
  <g id="Group_42" data-name="Group 42" transform="translate(-237 -809.144)">
    <rect id="Rectangle_12" data-name="Rectangle 12" width="245" height="60" transform="translate(237 809.144)" fill="#fff" />
    <text id="SIGN_UP" data-name="SIGN UP" transform="translate(308 846.144)" fill="#fe5a43" border= "1px solid red" font-size="30" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="0" y="0">Feedback</tspan></text>
  </g>
</svg>
          </Link>
          <Link to="/signup">
            <button>SIGN UP</button>
          </Link>
          <Link to="/signin">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="35" viewBox="0 0 245 60">
  <g id="Group_42" data-name="Group 42" transform="translate(-237 -809.144)">
    <rect id="Rectangle_12" data-name="Rectangle 12" width="245" height="80" transform="translate(237 809.144)" fill="#EA2027" />
    <text id="SIGN_UP" data-name="SIGN UP" transform="translate(308 846.144)" fill="#f1c40f" border= "1px solid red" font-size="35" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="0" y="0">SIGN IN</tspan></text>
  </g>
</svg>
          </Link>
        </Navgroup>
      </Nav>
    )
  }
  
};

export default Navbar;
