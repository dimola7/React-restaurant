import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Column } from './Grid';
import Container from './Container';
import swal from 'sweetalert';
import Navbarb from './Navbarb';


const SinglePageStyle = styled.div`
  margin: 50px 0;
  section{
    padding-left: 40px;
  }
  h2{
    margin: 0 0 15px 0;
    h3{
      margin: 0 0 15px 0;
      color: red;
  }
  img{
    width: 100%;
  }
  ul{
    margin: 20px 0;
  }
  .buttonb{
    display: inline-block;
    border-radius: 0;
    background-color: #fff;
    color: #EA2027;
    text-align: center;
    padding: 10px;
    width: 250px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    border: 2px solid rgb(255,0,0, .5);
    font-size:15px;
    width: 30%;
    margin-left: 40%;
    margin-right: 45%;
    height: 40px;
  }
  
  button {
    height: 35px;
    width: 100px;
    background-color: #EA2027;
    color: #f1c40f;
    border: 0;
    font-size: 14px;
    float: right;
  }
  section{
    background-color: red;
  }
  small{
    margin-left: 5px;
    font-size: 16px;
    color: #999;
    &::before{
      content: '(';
    }
    &::after{
      content: ')';
    }
    
  }
`;

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.sweetalertfunction = this.sweetalertfunction.bind(this),
    this.state = {
      meal: {},
      ready: 'initial',
    }
  }
  
  sweetalertfunction () {
    console.log('button clicks');
    swal("Please enter delivery address:", {
      content: "input",
    })
    .then((value) => {
      swal("Thank you!", "Your order has been placed", "success");
    });
  }

  componentDidMount() {
    const { match : { params } } = this.props;
    const id = params.id;
    this.setState({ ready: 'loading' });
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/app0s53GIQZBB0T5d/Cuisines/${id}`,
      headers: { Authorization: `Bearer keyhAAqvSVG6kZeVZ` },
    }).then(({ data }) => {
      this.setState({
        meal: data,
        ready: 'loaded',
      });
    });
  }
  render() {
    const { ready, meal } = this.state;
    return (
      <Fragment>
        <Navbarb />
        <SinglePageStyle>
          <Container>
            { ready === 'loading' ? (<h1>Loading content...</h1>) : '' }
            { ready === 'loaded' && (
              <Fragment>
                <Grid>
                  <Column columns="2">
                  </Column>
                  <Column columns="2">
                    <section>
                      <h1>{meal.fields.Name}</h1>
                  
                    </section>
                  </Column>
                </Grid>
                <Grid>
                  <Column columns="2">
                  <img src={require('../../assets/cake.png')} alt=""  />
                  </Column>
                  <Column columns="2">
                    <section>
                      <h2>Price:{meal.fields.Price}</h2>
                      <ul>
                        { meal.fields.Prices && meal.fields.Prices.map((prices, index) => (
                          <li key={index}>{price}</li>
                        )) }
                      </ul>
                      <h3>Description</h3>
                      <p>{meal.fields.Description}</p>
                      <button  onClick = {this.sweetalertfunction} class="button" >Order Now</button>
                      <button className="buttonb"><span><img src={require('../../assets/basket.png' )} alt="" height="21" width="21" /> Basket </span>
                        </button>
                    </section>
                  </Column>
                </Grid>
              </Fragment>
            ) }
          </Container>
        </SinglePageStyle>
      </Fragment>
    );
  }
}


export default SinglePage;
