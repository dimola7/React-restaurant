import React from 'react';
import styled from 'styled-components';

const FoodItemStyle = styled.div`
  height: 320px; rgba(0, 0, 0, .2);
  background: #EA2027;
  color: #fff;
  overflow: hidden;
  img{
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
  div{
    padding: 5px 10px;
  }
  h3, h5{
    margin: 5px 0;
  }
  h3{
    margin: 6px 0;
    font-weight: 300;
    font-size: 20px;
  }
  a{
    color: #fff;
    text-decoration: none;
    font-family: Helvetica, Sans-Serif;
  }
`;

const FoodItem = ({ children, image }) => (
  <FoodItemStyle>
    <img src={image || 'http://placehold.it/200'} alt="Food item" />
    <div>
      {children}
    </div>
    
  </FoodItemStyle>
);

export default FoodItem;
