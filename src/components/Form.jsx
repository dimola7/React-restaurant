import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Formstyle = styled.form`
  margin-top:1.8em;
  input{
    height: 40px;
    border: 0;
    font: inherit;
    padding: 10px;
    width: 100%;
    position: relative;
    bottom: 90px;
    ::placeholder{
      color: rgb(255,0,0, .5);
    }
  }
  button{
    display: inline-block;
    width: 100%;
    height: 40px;
    margin: 10px 2px;
    background: #EA2027;
    border:none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  @media(min-width: 720px) {
    input{
      width: 300px;
      margin: 0 -5px;
    }
    button{
      width: 100px;
      margin: 0 5px;
      position: relative;
      bottom: 90px;
    }
  }
`;


class Form extends Component {
    constructor() {
      super(); 
      this.state = {
        meals: [],
        ready: 'initial',
        search: " ",
      };
    } 
    componentDidMount() {
      this.setState({
        ready: 'loading',
      });
      axios({
        method: 'get',
        url: `https://api.airtable.com/v0/app0s53GIQZBB0T5d/Cuisines/`,
        headers: { Authorization: `Bearer keyhAAqvSVG6kZeVZ` },
  
      }).then(({ data: { records } }) => {
        ;
        this.setState({
          ready: 'loaded',
          meals: records,
        })
      })
    };
    MealChange(e) {
      this.setState({
        search: e.target.value
      })
    };

  render() {
    const { meals, ready, search } = this.state;

    const filtered = meals.filter(meal => {
      return meal.fields.toString().toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        meal.fields.toString().toLowerCase().indexOf(search.toLowerCase()) !== -1
    });

    return (  
      <Formstyle>
        <input
          type="search"
          name="Meals"
          placeholder="Search meal"
          onChange={this.MealChange.bind(this)}
        />
        <button>Search</button>
        
      </Formstyle>
    );
  }
} 

export default Form;
