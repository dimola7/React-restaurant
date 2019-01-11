import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Formstyle = styled.form`
  margin-top:1.8em;

  @media(min-width: 720px) {
    input{
      width: 200px;
      margin: 0 5px;
    }
`;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      mealName: '',
    };
    this.inputName = this.inputName.bind(this);
  }
  createMeal(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `https://api.airtable.com/v0/app0s53GIQZBB0T5d/Cuisines/${id}`,
      headers: { Authorization: `Bearer keyhAAqvSVG6kZeVZ` },
      data: {
        fields: {
          Name: this.state.mealName,
        }
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
  inputName(event) {
    this.setState({
      mealName: event.target.value,
    })
  }

  render() {
    return (
      <div>
      </div>
    );
  }
} 

export default Form;
