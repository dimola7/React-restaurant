import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Column } from './Grid';
import FoodBg from '../../assets/food.jpg';
import FoodItem from './FoodItem';
import Footer from './Footer';
import Container from './Container';
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

 h1{
  color: #f1c40f;
  position: relative;
  bottom: 70px;
 }
}

@media(min-width: 720px) {
.menu {
  background-color: #EA2027;
  color: #fff;
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
  bottom: 40px;
  ::placeholder{
    color: rgb(255,0,0, .5);
  }
}
.sbtn{
  display: inline-block;
  width: 100%;
  height: 40px;
  margin: 0px 2px 0px 0px;
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
    bottom: 70px;
  }
  .sbtn{
    width: 100px;
    margin: 0 5px;
    position: relative;
    bottom: 70px;
  }
}
@media(max-width: 720px) {
#Group_337{
  display: none;
  }
.pic{
   display: none;
 }
 .menu {
  background-color: #EA2027;
  color: #fff;
  padding: 9px;
  margin-top: -40px;
  font-size: 17px;
  width: 100%;
  position: relative;
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

  @media(max-width: 720px) {
    padding: 80px 20px;
  }
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
            <img src= "book-search.png" className="pic" alt=""  />
            <svg xmlns="http://www.w3.org/2000/svg" width="170.551" height="60.735" viewBox="0 0 170.551 60.735">
              <g id="Group_337" data-name="Group 337" transform="translate(0.683 1.003)" opacity="0.5">
                <path id="Path_198" data-name="Path 198" d="M3538.283-513.006s28.477-26.6,61.956-27.807c35.078-1.262,75.959,23.625,100.712,51.216" transform="translate(-3538.283 540.859)" fill="none" stroke="#ffba48" stroke-width="2"/>
                <path id="Path_199" data-name="Path 199" d="M22.488,0l5.583,26.7L0,22.488l18.625-5.235Z" transform="translate(137.967 33.361) rotate(-9)" fill="#ffba48"/>
              </g>
            </svg>
            <img src="../assets/food.png" className="pic"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="170.551" height="60.735" viewBox="0 0 170.551 60.735">
              <g id="Group_337" data-name="Group 337" transform="translate(0.683 1.003)" opacity="0.5">
                <path id="Path_198" data-name="Path 198" d="M3538.283-513.006s28.477-26.6,61.956-27.807c35.078-1.262,75.959,23.625,100.712,51.216" transform="translate(-3538.283 540.859)" fill="none" stroke="#ffba48" stroke-width="2"/>
                <path id="Path_199" data-name="Path 199" d="M22.488,0l5.583,26.7L0,22.488l18.625-5.235Z" transform="translate(137.967 33.361) rotate(-9)" fill="#ffba48"/>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="94.041" height="75.422" viewBox="0 0 94.041 75.422">
              <g id="Group_380" data-name="Group 380" transform="translate(-427.479 1)">
                <g id="Group_331" data-name="Group 331" transform="translate(428.479)">
                  <g id="delivery-2323" transform="translate(7.758 20.17)">
                    <path id="layer2" d="M21.412,15h40.34c3.569,0,3.258,2.482,2.638,4.81s-5.741,23.118-5.741,23.118H74.32l6.206-3.1,6.051,3.1V55.34c0,2.017-.776,3.1-3.1,3.1H71.062M9,58.443H19.24m14.584,0H56.477" transform="translate(-2.794 -15)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" />
                    <path id="layer2-2" data-name="layer2" d="M64.889,23h8.378l9.464,12.412M45.34,23H11.206M39.134,35.412H5" transform="translate(-5 -10.588)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" />
                    <path id="layer1" d="M30.213,46.758a10.706,10.706,0,0,1-9.62,7.758c-4.189,0-6.516-3.413-5.275-7.758A10.706,10.706,0,0,1,24.938,39c4.034,0,6.516,3.413,5.275,7.758Zm37.237,0a10.706,10.706,0,0,1-9.62,7.758c-4.189,0-6.516-3.413-5.275-7.758A10.706,10.706,0,0,1,62.175,39C66.209,39,68.691,42.413,67.45,46.758Z" transform="translate(0.507 -1.763)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" />
                  </g>
                  <g id="Group_330" data-name="Group 330">
                    <circle id="layer1-2" data-name="layer1" cx="13.188" cy="13.188" r="13.188" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none" />
                    <path id="layer1-3" data-name="layer1" d="M46,12v8.243h6.594" transform="translate(-32.812 -5.406)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                  </g>
                </g>
              </g>
            </svg>
          </Header>
          <main>
            <h2 align="center" className="menu"> Scroll down to see MENU  <svg xmlns="http://www.w3.org/2000/svg" width="18.836" height="10.676" viewBox="0 0 18.836 10.676">
              <path id="Path_200" data-name="Path 200" d="M3951-265l9.514,8.531,7.921-8.531" transform="translate(-3950.332 265.745)" fill="none" stroke="#fff" stroke-width="2"/>
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
