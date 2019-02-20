import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Checkout from './Checkout';
import Container from './Container';

const BasketStyle = styled.div`
body{
  margin: 0;
  padding: 0;
  font-family: san-serif;
}

.wrapper{
  display:grid;
  grid-template-columns:3fr 1fr;
  grid-gap: 50px;
}
@media(max-width: 720px){
  .wrapper{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
}
.left{
  margin-top: 40px;
}
.wrapper2{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap: 50px;
}
@media(max-width: 720px){
  .wrapper2{
    grid-gap: 50px;
    grid-template-columns: 1fr;
  }
}
.left2{
  background:#fff;
  margin-left: 70px;
}
.right2{
  background:#fff;
  margin-left: 40px;
}
@media(max-width: 720px){
  .right2{
  margin-left: 70px;
  }
}
.right{
  background: #EA2027;
  margin-right: 70px;
}
@media(max-width: 720px){
  .right{
    margin-left: 70px;
  }
}
p{
  font-size: 70px;
}
h1{
  font-size: 20px;
  color: #EA2027;
  font-weight: 700;
  margin-bottom: 30px;
}
h2{
  font-size: 12px;
  color: rgb(255,0,0, .5);
}
input{
  background-color: #EA2027;
  border: none;
  width: 375px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.short{
  width: 180px;
}
.grid-input{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
  
`;

  class Basket extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
 
  render() {
    const { ready, meal } = this.state;
    return (
      <Fragment>
      <Checkout />
        <BasketStyle>
          <div className="wrapper">
            <div className="left">
              <div className="wrapper2">
                <div className="left2">
                  <h1>Delivery Address</h1>
                  <h2>FULL NAME</h2>
                  <input type="email" />
                  <h2>ADDRESS</h2>
                  <input type="name" class="address" />
                  <div className="grid-input">
                    <div className="one">
                      <h2>TOWN</h2>
                      <input type="name" class="short" />
                    </div>
                    <div className="two">
                      <h2>STATE</h2>
                      <input type="name" class="short" />
                    </div>
                  </div>
                </div>
                <div className="right2">
                  <h1>Card Details</h1>
                  <h2>CARD NUMBER</h2>
                  <input type= "tel" class="fullname" />
                  <h2>CARDHOLDER NAME</h2>
                  <input type="name" class="fullname" />
                  <h2>EXPIRY DATE</h2>
                  <input type="month" class="fullname" />
                  <h2>CVV</h2>
                  <input type="name" class="short" />
                </div>
              </div>
            </div>

            <div className="right">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </BasketStyle>
      </Fragment>
    );
  }
}


export default Basket;
