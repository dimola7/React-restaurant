import React from 'react'
import styled from 'styled-components';
import logo from './logo_transparent.png';

const Foot = styled.footer`
  padding-top: 120px;
  p{
    text-align: center;
  }
  .footergrid {
    background-color: #EA2027;
    height: 100%;
    text-align: center;
    padding: 10px;
    h1{
      color: #f1c40f;
    }
    h4 {
      color: #ecf0f1;
    }
    p {
      color: #f1c40f;
      margin: 0px;
    }
    @media (min-width: 768px) {
      display:grid;
      grid-template-columns:repeat(2,1fr);
      padding:20px;
    }
    @media (min-width: 1024px) {
      display:grid;
      grid-template-columns:repeat(3,1fr);
    }
  }
`;
 const Year= new Date().getFullYear();

const Footer = () => (
  <Foot>
    <div className="footergrid">

    <div className="footer-logo">
        <img style={{width: '80px', height: '80px'}} src={logo} alt ="" />
        <h1>Delish Foods</h1>
    </div>

      <div className="footer-about">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, </p>
        <p>consectetur adipisicing </p>
        <p>elit, sed do eiusmod tempor </p>
        <p>incididunt ut labore dolore magna</p>
      </div>

      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Lorem ipsum dolor sit amet, </p>
        <p>consectetur adipisicing </p>
        <p>elit, sed do eiusmod tempor </p>
        <p>incididunt ut labore dolore magna</p>
      </div>

    </div>
    <p>
      &copy;{Year} , Adedimola
    </p>
  </Foot>
);

export default Footer;
