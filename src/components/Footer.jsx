import React from 'react'
import styled from 'styled-components';
import logo from './logo_transparent.png';


const Foot = styled.footer`
  padding-top: 120px;
  p{
    text-align: left;
  }
  .footergrid {
    background-color: #EA2027;
    height: 100%;
    text-align: left;
    font-size: 18px;
    padding: 10px;
    h1{
      color: #f1c40f;
    }
    h4 {
      color: #ecf0f1;
      font-size: 12px;
    }
    button{
      background: #f1c40f;
      color: #EA2027;
      border:none;
      height: 22px;
      width: 80px;
      font-size: 11px;
    }
    @media(min-width: 720px) {
      input{
        width: 150px;
        margin: 0 -5px;
        height: 21px;
        border: none;
      }

    .footer-icons{\
      display: flex;
      justify-content: space-evenly;
      width: 30%;
      margin: 0 2px;
    }
    @media only screen and (min-width: 900px) {
      .footer-icons{
        display: flex;
        justify-content: space-evenly;
        width: 30%;
        margin: 0 2px;
      }
    }
    input::placeholder{
      padding-left: 10px;
    }
    p {
      color: #fff;
      font-size: 12px;
      margin: 5px;
    }
    @media (min-width: 768px) {
      display:grid;
      grid-template-columns:repeat(2,1fr);
      padding:20px;
    }
    @media (min-width: 1024px) {
      display:grid;
      grid-template-columns:repeat(5,1fr);
    }
  }
`;

const Footer = () => (
  
  <Foot>
    <div className="footergrid">

    <div class="container">
        <div class="row"></div>
    <div className="footer-logo">
        <img style={{width: '90px', height: '90px'}} src={logo} alt ="" />
        <div className="footer-icons">
    <p><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19.161" height="19.161" viewBox="0 0 19.161 19.161">
  <g id="Instagram" transform="translate(-0.001 0)">
    <path id="Path_3" data-name="Path 3" d="M9.581,1.7a29.376,29.376,0,0,1,3.832.106,4.937,4.937,0,0,1,1.81.319,3.738,3.738,0,0,1,1.81,1.81,4.937,4.937,0,0,1,.319,1.81c0,.958.106,1.277.106,3.832a29.376,29.376,0,0,1-.106,3.832,4.937,4.937,0,0,1-.319,1.81,3.738,3.738,0,0,1-1.81,1.81,4.937,4.937,0,0,1-1.81.319c-.958,0-1.277.106-3.832.106a29.376,29.376,0,0,1-3.832-.106,4.937,4.937,0,0,1-1.81-.319,3.738,3.738,0,0,1-1.81-1.81,4.937,4.937,0,0,1-.319-1.81c0-.958-.106-1.277-.106-3.832A29.376,29.376,0,0,1,1.81,5.748a4.937,4.937,0,0,1,.319-1.81,3.823,3.823,0,0,1,.745-1.065,1.8,1.8,0,0,1,1.065-.745,4.937,4.937,0,0,1,1.81-.319A29.376,29.376,0,0,1,9.581,1.7m0-1.7A31.453,31.453,0,0,0,5.642.106,6.572,6.572,0,0,0,3.3.532,4.167,4.167,0,0,0,1.6,1.6,4.167,4.167,0,0,0,.532,3.3,4.85,4.85,0,0,0,.106,5.642,31.453,31.453,0,0,0,0,9.581a31.453,31.453,0,0,0,.106,3.939,6.572,6.572,0,0,0,.426,2.342,4.167,4.167,0,0,0,1.065,1.7,4.167,4.167,0,0,0,1.7,1.064,6.572,6.572,0,0,0,2.342.426,31.453,31.453,0,0,0,3.939.106,31.453,31.453,0,0,0,3.939-.106,6.572,6.572,0,0,0,2.342-.426,4.466,4.466,0,0,0,2.768-2.768,6.572,6.572,0,0,0,.426-2.342c0-1.065.106-1.384.106-3.939a31.453,31.453,0,0,0-.106-3.939A6.572,6.572,0,0,0,18.629,3.3a4.167,4.167,0,0,0-1.064-1.7,4.167,4.167,0,0,0-1.7-1.065A6.572,6.572,0,0,0,13.519.106,31.453,31.453,0,0,0,9.581,0m0,4.684a4.818,4.818,0,0,0-4.9,4.9,4.9,4.9,0,1,0,4.9-4.9m0,8.09A3.136,3.136,0,0,1,6.387,9.581,3.137,3.137,0,0,1,9.581,6.387a3.136,3.136,0,0,1,3.194,3.194,3.136,3.136,0,0,1-3.194,3.194M14.69,3.3a1.171,1.171,0,1,0,1.171,1.171A1.181,1.181,0,0,0,14.69,3.3" fill="#ffba48" fill-rule="evenodd"/>
  </g>
</svg></a></p>
<p>
<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19.161" height="15.542" viewBox="0 0 19.161 15.542">
  <g id="Twitter" transform="translate(-0.001 0)">
    <path id="Path_2" data-name="Path 2" d="M44.068,17.542A11.078,11.078,0,0,0,55.245,6.364V5.832A8.653,8.653,0,0,0,57.161,3.81a8.836,8.836,0,0,1-2.235.639,4.142,4.142,0,0,0,1.7-2.129,9.764,9.764,0,0,1-2.448.958A3.8,3.8,0,0,0,51.306,2a4,4,0,0,0-3.939,3.939,2.075,2.075,0,0,0,.106.852,11.006,11.006,0,0,1-8.09-4.152,4.077,4.077,0,0,0-.532,2.023,4.229,4.229,0,0,0,1.7,3.3,3.589,3.589,0,0,1-1.81-.532h0a3.89,3.89,0,0,0,3.194,3.832,3.282,3.282,0,0,1-1.065.106,1.812,1.812,0,0,1-.745-.106,4.033,4.033,0,0,0,3.726,2.768,8.037,8.037,0,0,1-4.9,1.7A2.947,2.947,0,0,1,38,15.626a10.048,10.048,0,0,0,6.068,1.916" transform="translate(-38 -2)" fill="#ffba48" fill-rule="evenodd"/>
  </g>
</svg></a></p>
<p><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="10.006" height="19.161" viewBox="0 0 10.006 19.161">
  <g id="Facebook" transform="translate(-0.001 0)">
    <path id="Path_1" data-name="Path 1" d="M86.493,19.161V10.432h2.981L89.9,7.026H86.493V4.9c0-.958.319-1.7,1.7-1.7h1.81V.106C89.58.106,88.516,0,87.345,0a4.109,4.109,0,0,0-4.364,4.471V7.026H80v3.406h2.981v8.729Z" transform="translate(-80)" fill="#ffba48" fill-rule="evenodd"/>
  </g>
</svg></a></p>
</div>
</div>
</div>
    <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>+234 (0) 1 3678 903 </p>
        <p>contact@delishfoods.com </p>
        <p>1 Delish street, Ikeja, Lagos. </p>
        
      </div>

      <div className="footer-service">
        <h4>Customer Service</h4>
        <p>Contact Us </p>
        <p>Ordering & Payment </p>
        <p> FAQ </p>
      </div>

      <div className="footer-information">
        <h4>Information</h4>
        <p>ABOUT US </p>
        <p>Work With Us </p>
        <p>Privacy Policy </p>
        <p>Terms & Conditions</p>
        <p>Press Enquiries</p>
      </div>
      
      <div className="footer-subscribtion">
        <h4>Subscribe to Delish Foods via Email</h4>
        <p>Excepteur sint occaecat cupidatat non proident. </p>
        <p>sunt in culpa qué officia </p>
        <p><input type="text" name="subscibe" placeholder="Email Address" /> 
       <button type="submit">SUBSCRIBE</button>
      </p>
      </div>
    </div>

  </Foot>
);

export default Footer;
