import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  padding: 30px 40px;
  background:#EA2027;
  color: #fff;
  a{
    color: inherit;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderStyle>
    <Link to="/">Home</Link>
  </HeaderStyle>
);

export default Header;
