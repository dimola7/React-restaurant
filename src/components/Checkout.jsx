import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutStyle = styled.header`
  padding: 30px 40px;
  background:#fff;
  color: #EA2027;
  a{
    color: inherit;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Checkout = () => (
  <CheckoutStyle>
    <Link to="/">Checkout</Link>
  </CheckoutStyle>
);

export default Checkout;
