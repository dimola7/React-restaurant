import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Navbarc from './Navbarc';


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
@media only screen 
and (min-device-width : 768px) and (max-device-width : 1024px){
  .wrapper{
    display:grid;
    grid-template-columns:3fr 1fr;
    grid-gap: 50px;
  }
  .wrapper2{
    display:grid;
    grid-template-columns:1fr;
    grid-gap: 50px;
  }
  .wrapper3{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
  }
  .left2{
    background:#fff;
    position: relative;
    left: -30px;
  }
  .right{
    background: #EA2027;
    margin-right: 0px;
    position: relative;
    right: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .img{
    position: relative;
    right: 40px;
  }
}
@media(max-width: 720px){
  .wrapper2{
    grid-gap: 50px;
    grid-template-columns: 1fr;
    // margin-right: 40px;
    margin-left: -20px;
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
  height: 100px;
}
.short{
  width: 180px;
}
@media(max-width: 720px){
  .short{
    width: 170px;
  }
}
.right3{
  position: relative;
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
.wrapper3{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media(max-width: 720px){
  .wrapper3{
    margin-top: 40px;
    grid-gap: 20px;
  }
  input{
    background-color: #EA2027;
    border: none;
    width: 280px;
    height: 40px;
  }
  .short{
    width: 130px;
  }
  .wrapper3{
    position: relative;
    right: 90px;
  }
}
.btn1{
  color: #EA2027;
  background-color: #fff;
  padding: 10px 30px;
}
.btn2{
  color: #fff;
  background-color: #EA2027;
  padding: 10px 30px;
}
.left3{
  margin-left: 150px;
}
.swal{
  background-color: red;
}

`;

  class Basket extends Component {
    constructor(props) {
      super(props);
      this.sweetalertfunction = this.sweetalertfunction.bind(this),
      this.state = {value: ''};
    }
    sweetalertfunction () {
      console.log('button clicks');
        swal(
        "Thank you!", 
        "Your order has been placed",
        "success"
        );
      ;
    }
    // componentWillUpdate = (nextProps, nextState) => {
    //   localStorage.setItem('meals', 'meh');
    // }

 
  render() {
    const { ready, meal } = this.state;
    return (
      <Fragment>
        <Navbarc />
        <hr className="line"></hr>
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

          <div className="wrapper3">
            <div className="left3">
            <Link to="/"><button className="btn1">Cancel</button>
            </Link>
            </div>
            <div className="right3">
            <button className="btn2" onClick = {this.sweetalertfunction}>Place Order</button>
            </div>
          </div>
        </BasketStyle>
      </Fragment>
    );
  }
}


export default Basket;
