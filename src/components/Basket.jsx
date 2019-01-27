import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Column } from './Grid';
import Container from './Container';
import logo from './logo_transparent.png';



const BasketStyle = styled.div`
body{
  margin: 0;
  padding: 0;
  font-family: san-serif;
}
p{
  font-size: 70px;
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
      <p>coming soon!!</p>
    );
  }
}


export default Basket;
