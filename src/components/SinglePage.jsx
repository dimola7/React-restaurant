import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from './Footer';
import { Grid, Column } from './Grid';
import Container from './Container';
import Header from './Header';


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
  ul{
    margin: 20px 0;
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
    this.state = {
      meal: {},
      ready: 'initial',
    }
  }
  componentDidMount() {
    const { match : { params } } = this.props;
    const id = params.id;
    this.setState({ ready: 'loading' });
    axios({
      method: 'get',
      url: `${process.env.HOST}/Cuisines/${id}`,
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
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
        <Header />
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
                    <img src={meal.fields.Icon[0].thumbnails.large.url} alt="Meal" />
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
                      <a href="#0" class="button">Order</a>
                    </section>
                  </Column>
                </Grid>
              </Fragment>
            ) }
          </Container>
        </SinglePageStyle>
        <Footer />
      </Fragment>
    );
  }
}


export default SinglePage;
