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
    color: rgb(241, 196, 15);
    font: inherit;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    bottom: 50px;
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
    img{
      height: 90px;
      width: 90px;
    }
    @media(max-width: 720px){
      img{
        height: 90px;
        width: 90px;
      }
    }
  }
`;


class Form extends Component {
  constructor() {
    super();
    this.state = {
      // state initialization
      clickEvent: '',
      ready: '',
      input: '',
      SearchBy: '',
   
    };
    this.addInput = this.addInput.bind(this);
    this.search = this.search.bind(this);
    this.SearchBy = this.SearchBy.bind(this);
  }
  addInput(event) {
    this.setState({
      input: event.target.value,
    })
  }

  SearchBy(event) {
      const select = {
        meal : document.getElementById('meal').getAttribute('id'),
       };       
   
    this.setState({
      select: event.target.value,
    })
  }
 
  search(event) {
    event.preventDefault();
    const {input, select} = this.state;
    // const {select} = this.state;
    this.setState({
      ready: 'loading',
      input: '', 
    });
    
    axios({
      mode: 'no-cors',	    
      method: 'get',
      url: `https://api.airtable.com/v0/app0s53GIQZBB0T5d/Cuisines/`,
      headers: {Authorization: `Bearer keyhAAqvSVG6kZeVZ`}
    })
    .then(({ data:{data} } ) =>{
      const {select} = this.state;
        console.log(data);
        this.setState({
          ready: 'loaded',
          meal: data,
          select: '',
        })
        
    })
    .catch(err =>{
      console.log(error);
      this.setState({
        ready: 'error'
      })
    })
  }

  render() {
    return (    
      <Formstyle onSubmit={this.search}>
      <input onChange={this.addInput} type="text" name="search" placeholder="Search meal" /> 
       <button type="submit">Search</button>
      </Formstyle>
    );
  }
} 

export default Form;
