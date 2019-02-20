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
  font-size: 14px;
  color: #fff;
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
table {
  margin: 0 auto;
  border-color: #f1c40f;
  border-top: #f1c40f;
  border-bottom: #f1c40f;
}
table td {
  padding: 1rem;
  color: #f1c40f;
  font-weight: 600;
}
table th {
  height: 130px;
}
.short{
  width: 180px;
}
@media(max-width: 720px){
  .short{
    width: 170px;
  }
}
.grid-input{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
h3{
  color: #fff;
  margin-left: 20px;
}
h4{
  color: #fff;
  margin-left: 80px;
  font-weight: 700;
}
.img{
  color: #fff;
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
                  <input type="tel" class="fullname" />
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
            <h4 className="img"><span><img src={require('../../assets/basket.png')} alt="" height="21" width="21" /> Basket </span>
            </h4>

              <table rules="all">
                <tr>
                  <td>Items</td>
                  <td>Price</td>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>Delivery fee</td>
                  <td></td>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </table>
              <h3>Total:</h3>
            </div>
          </div>
        </BasketStyle>
      </Fragment>
    );
  }
}


export default Basket;
