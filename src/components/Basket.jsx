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
  background:#EA2027;
}
.right2{
  background:blue;
}
.right{
  background: yellow;
}
p{
  font-size: 70px;
}
h1{
  font-size: 20px;
}
h2{
  font-size: 12px;
}
::placeholder{
  color: red;
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
                <input type="name" class="fullname"/>
              </div>
              <div className="right2">
                <p>Lorem ipsum dolor sit amet.</p>
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
