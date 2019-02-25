import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Column } from './Grid';
import FoodBg from '../../assets/food.jpg';
import FoodItem from './FoodItem';
import Footer from './Footer';
import Container from './Container';
// import Form from './Form';
import Navbar from './Navbar';


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
 Header{
   margin-top: 0px;
 }
 h1{
  color: #f1c40f;
  position: relative;
  bottom: 100px;
  
 }
 
 h2{
   margin-top: 40px;
   text-font: 16px;
 }
 h3{
    font-size: 16px;
    font-family: Helvetica, Sans-Serif;
    display: inline;
    margin: 0px 40px 0px 0px;
    align: left;
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
  width: 20%;
  margin-left: 68%;
  margin-right: 5%;
  margin-top: 5%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.01);
}

.btn-group .buttonb:hover {
  background-color: #EA2027;
  color: white;
}
.button {
  display: inline-block;
  border-radius: 0;
  border: 2px solid rgb(255,0,0, .5);
  background-color: #fff;
  color: #EA2027;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 250px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  border: 2px solid #EA2027;
  font-size:13px;
  width: 20%;
  margin-left: 40%;
  margin-right: 30%;
}
@media(max-width: 900px){
  .button{
    font-size: 0px;
  }
}

@media(min-width: 720px) {
.menu {
  background-color: #EA2027;
  color: #f1c40f;
  padding: 15px;
  margin-top: -40px;
  font-size: 17px;
  width: 67.3%;
  position: relative;
  left: 219px;
}
}
.form{
  margin-top: 20px;
}
.search{
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
.sbtn{
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
  .search{
    width: 300px;
    margin: 0 -5px;
  }
  .sbtn{
    width: 100px;
    margin: 0 5px;
    position: relative;
    bottom: 90px;
  }
}
 `;

const Header = styled.header`
  padding: 150px 20px;
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${FoodBg});
  background-size: 898px;
  background-repeat: no-repeat;
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
      headers: {Authorization: `Bearer keyhAAqvSVG6kZeVZ`},
    }).then(({ data: { records } }) => {
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
    const { meals, ready,search } = this.state;

    const filtered = meals.filter(meal => {
      return meal.fields.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    });

    return (
      <div>
        <HomeStyle>
          <Navbar id="top" />       
          <Header >
            <h1>So Fast! So Hot!!</h1>
            <div className="form">
              <input
                type="search"
                name="Meals"
                placeholder="Search meal"
                className="search"
                onChange={this.MealChange.bind(this)}
              />
              <button className="sbtn">Search</button>
            </div>
            {/* <Form /> */}
            <img src= "book-search.png" alt=""  />
            <svg xmlns="http://www.w3.org/2000/svg" width="170.551" height="60.735" viewBox="0 0 170.551 60.735">
              <g id="Group_337" data-name="Group 337" transform="translate(0.683 1.003)" opacity="0.5">
                <path id="Path_198" data-name="Path 198" d="M3538.283-513.006s28.477-26.6,61.956-27.807c35.078-1.262,75.959,23.625,100.712,51.216" transform="translate(-3538.283 540.859)" fill="none" stroke="#ffba48" stroke-width="2"/>
                <path id="Path_199" data-name="Path 199" d="M22.488,0l5.583,26.7L0,22.488l18.625-5.235Z" transform="translate(137.967 33.361) rotate(-9)" fill="#ffba48"/>
              </g>
            </svg>
            <img src="../assets/food.png" />
            <svg xmlns="http://www.w3.org/2000/svg" width="170.551" height="60.735" viewBox="0 0 170.551 60.735">
              <g id="Group_337" data-name="Group 337" transform="translate(0.683 1.003)" opacity="0.5">
                <path id="Path_198" data-name="Path 198" d="M3538.283-513.006s28.477-26.6,61.956-27.807c35.078-1.262,75.959,23.625,100.712,51.216" transform="translate(-3538.283 540.859)" fill="none" stroke="#ffba48" stroke-width="2"/>
                <path id="Path_199" data-name="Path 199" d="M22.488,0l5.583,26.7L0,22.488l18.625-5.235Z" transform="translate(137.967 33.361) rotate(-9)" fill="#ffba48"/>
              </g>
            </svg>
          <img src="../assets/Group 331.png" />
          </Header>
          <main>
            <h2 align="center" className="menu"> Scroll down to see MENU  <svg xmlns="http://www.w3.org/2000/svg" width="18.836" height="10.676" viewBox="0 0 18.836 10.676">
              <path id="Path_200" data-name="Path 200" d="M3951-265l9.514,8.531,7.921-8.531" transform="translate(-3950.332 265.745)" fill="none" stroke="#ffba48" stroke-width="2"/>
              </svg>
            </h2>
          <div class="btn-group">
            <Link to="/basket">
            <button className="buttonb"><span><img src={require('../../assets/basket.png' )} alt="" height="21" width="21" /> Basket </span>
            </button></Link>
          </div>
            <Container>
              <Grid>
                {meals.length ? '' : ''}
                {ready === 'loading' ? 'Loading...' : ''}
                {filtered.map(meal => (
                  <Column columns="3" key={meal.id}>
                    <FoodItem image={meal.fields.Icon ? meal.fields.Icon[0].url : ''} >
                      <h3><Link to={`/meal/${meal.id}`}>{meal.fields.Name}</Link></h3>
                      <h3>{meal.fields.Price}</h3>
                    </FoodItem>
                  </Column>
                ))}
              </Grid>
            </Container>
          </main>
     
          
          <a href="#top">
            <button class="button"><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 38.504 25.628">
              <g id="_8ef3f691536d4c6026f6ae25d884986b" data-name="8ef3f691536d4c6026f6ae25d884986b" transform="translate(38.505) rotate(90)">
                <path id="Path_240" data-name="Path 240" d="M25.628,38.5,5.962,19.252,25.628,0H19.252L0,19.252,19.252,38.5Z" fill="#fe5a43"/>
              </g>
            </svg> Back to the top </span></button>
            </a>
          <Footer />
        </HomeStyle>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
} 


export default Home;
