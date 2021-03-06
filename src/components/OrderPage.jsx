import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from './Footer';
import { Grid, Column } from './Grid';
import Container from './Container';
import Header from './Header';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Navbarb from './Navbarb';

// import MyProvider from './Contextapi';

const OrderPageStyle = styled.div`
  margin: 50px 0;
  section{
    padding-left: 40px;
  }
  h3{
      margin: 0 0 15px 0;
  }
  .price{
    margin-top: -60px;
  }
  .name{
    margin-top: -60px;
  }
  .btn1{
    color: #EA2027;
    background-color: #fff;
    padding: 8px 70px;
  }
  .img{
    margin-top: -120px;
  }
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 40px;
    grid-gap: 100px;
  }
  .btn2{
    color: #fff;
    background-color: #EA2027;
    padding: 10px 80px;
    padding: 10px 80px; border: none;
    cursor: pointer;
  }

.wrapper2{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 20px;
}
.btn3{
  color: #fff;
  padding: 0 30px 20px 12px ;f;
  background-color: #EA2027;
  border: none;
  padding: 10px 15px 10px 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
input{
  width: 25%; 
  height: 100%;
  text-align: center;
}

  @media(max-width: 720px){
    .btn2{
      padding: 10px 20px;
    }
    .btn1{
      padding: 8px 40px;
    }
    .price{
      margin-top: -10px;
    }
    .name{
      margin-bottom: 60px;
    }
    .img{
      position: relative;
      left: 40px;
      height: 180px

    }
  }

`;

class OrderPage extends Component {
  constructor(props) {
    super(props);
    (this.sweetalertfunction = this.sweetalertfunction.bind(this)),
      (this.state = {
        meal: {},
        ready: 'initial',
        clicks: 0,
        show: true
      });
  }

  // incrementCount = () => {
  //         count: this.state.count + 1
  //       };

  // decrementCount(){
  //       this.setState({
  //         count: this.state.count - 1
  //       });
  //     }

  // getInitialState(){
  //   count: 0
  //   this.state = {
  //         meal: {},
  //         ready: 'initial',
  //         clicks:0,
  //         show:true,
  //         count: 0
  //       }
  // }

  sweetalertfunction() {
    console.log('button clicks');
    swal('Thank you!', 'Your order has been placed', 'success');
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const id = params.id;
    this.setState({ ready: 'loading' });
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/app0s53GIQZBB0T5d/Cuisines/${id}`,
      headers: { Authorization: `Bearer keyhAAqvSVG6kZeVZ` }
    }).then(({ data }) => {
      this.setState({
        meal: data,
        ready: 'loaded'
      });
    });
  }
  render() {
    const { ready, meal } = this.state;
    return (
      <Fragment>
        {/* <Header /> */}
        <Navbarb />
        <hr className="line" />
        <OrderPageStyle>
          <Container>
            {ready === 'loading' ? <h1>Loading content...</h1> : ''}
            {ready === 'loaded' && (
              <Fragment>
                <Grid>
                  <Column columns="2" />
                  <Column columns="2">
                    <section>
                      <h1 className="name">{meal.fields.Name}</h1>
                    </section>
                  </Column>
                </Grid>
                <Grid>
                  <Column columns="2">
                    <img
                      src={meal.fields.Icon[0].thumbnails.large.url}
                      alt="Meal"
                      className="img"
                      height="300"
                    />
                  </Column>
                  <Column columns="2">
                    <section className="right">
                      <h2 className="price">Price:{meal.fields.Price}</h2>
                      <ul>
                        {meal.fields.Prices &&
                          meal.fields.Prices.map((prices, index) => <li key={index}>{price}</li>)}
                      </ul>
                      <h3>Description</h3>
                      <p>{meal.fields.Description}</p>
                      {/* <h4>Quantity</h4>
                      <div className="wrapper2">
                        <div className="minus">
                          <button className="btn3">-</button>
                        </div>
                        <div>{this.state.count}</div>
                        <div className="plus">
                          <button className="btn3">+</button>
                        </div>
                      </div> */}
                      <button
                        className="btn1"
                        onClick={() => {
                          if (JSON.parse(localStorage.getItem('basketItems'))) {
                            let basketItems = JSON.parse(localStorage.getItem('basketItems'));
                            localStorage.removeItem('basketItems');
                            basketItems.push(meal);
                            localStorage.setItem('basketItems', JSON.stringify(basketItems));
                          } else {
                            let basketItems = [meal];
                            localStorage.setItem('basketItems', JSON.stringify(basketItems));
                          }
                        }}
                      >
                        <img
                          src={require('../../assets/basket.png')}
                          alt=""
                          height="21"
                          width="21"
                        />{' '}
                        Add to basket
                      </button>
                    </section>
                  </Column>
                </Grid>
                <div className="wrapper">
                  <div className="left">
                    <Link to="/">
                      <button className="btn2">Back to Menu</button>
                    </Link>
                  </div>
                  <div className="right">
                    <button className="btn2" onClick={this.sweetalertfunction}>
                      Order Now
                    </button>
                  </div>
                </div>
              </Fragment>
            )}
          </Container>
        </OrderPageStyle>
        <Footer />
      </Fragment>
    );
  }
}

export default OrderPage;
