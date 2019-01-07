import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  a img {
    width: 200px;
    height: 30px;
    float: left;
    padding: 5px;

  }

`;

const Navgroup = styled.nav`
  padding: 20px 0;
  text-align: center;
  display: none;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  justify-items: center;

  a {
    font-weight: bolder;
    font-size: 18px;
    color: #293064;
  }

  a button {
    height: 35px;
    width: 116px;
    background-color: #031249;
    color: #b7c2f1;
    border: 0;
    border-radius: 0.5em;
    font-size: inherit;
  }
`; 

const Navbar = () => (
  <Nav>
    <Navgroup>
      <Link to="/">Menu</Link>
      <Link to="/">Change Location</Link>
      <Link to="/">
        <button>Sign in</button>
      </Link>
    </Navgroup>
  </Nav>
);

export default Navbar;
