import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Column } from './Grid';
import FoodBg from '../../assets/food.jpg';
import FoodItem from './FoodItem';
import Footer from './Footer';
import Container from './Container';
import Form from './Form';
import currencyFormater from 'currency-formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar';
import logo from './logo_transparent.png';


export const Food = () => (
  <div>
    Favorite Food: <FontAwesomeIcon icon="igloo" />
  </div>
)

const HomeStyle = styled.div`
  header, footer{
    text-align: center;
  }
  main{
    margin: 20px 0;
  }
  span {
    display: block;
}
`;

const Header = styled.header`
  padding: 100px 20px;
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${FoodBg});
  background-size: cover;
  background-position: center;
  color: #fff;
  margin-top: 0px;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      meals: [],
      ready: 'initial',
    };
  }
  componentDidMount() {
    this.setState({
      ready: 'loading',
    });
    axios({
      method: 'get',
      url: `${process.env.HOST}/Cuisines`,
      headers: {Authorization: `Bearer ${process.env.API_KEY}`},
    }).then(({ data: { records } }) => {
      this.setState({
        ready: 'loaded',
        meals: records,
      })
    })
  }
  render() {
    const { meals, ready } = this.state;
    return (
      <div>
        <Navbar />
        <HomeStyle>        
          <Header>
            <img style={{width: '250px', height: '250px'}} src={logo} alt ="" />
            <h2>So fast so hot</h2>
            <Form />
          </Header>
          <main>
            <Container>
              <Grid>
                {meals.length ? '' : ''}
                {ready === 'loading' ? 'loading_icon.gif' : ''}
                {meals.map(meal => (
                  <Column columns="3" key={meal.id}>
                    <FoodItem image={meal.fields.Icon ? meal.fields.Icon[0].url : ''} >
                      <h3><Link to={`/meal/${meal.id}`}>{meal.fields.Name}</Link></h3>
                    </FoodItem>
                  </Column>
                ))}
              </Grid>
            </Container>
          </main>
          <Footer />
        </HomeStyle>
      </div>
    );
  }
} 

export default Home;
