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
  #Group_380{
   display: none;    
  }

  #Group_336{
    display: none;
  }
  #food{
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
            <svg xmlns="http://www.w3.org/2000/svg" width="103.744" height="72.409" viewBox="0 0 103.744 72.409">
              <g id="Group_336" data-name="Group 336" transform="translate(0 0)">
                <path id="Path_239" data-name="Path 239" d="M60.295,219.834h6.585a22.873,22.873,0,0,1-2.244-2.414c-.3-.381-.561-.773-.826-1.164-.1-.148-.212-.286-.307-.423-.349-.529-.667-1.069-.963-1.62l-7.6,1.62v-46.4L70.076,166.2l17.7-3.779v19.362c.6.159,1.2.328,1.789.529s1.2.434,1.789.7c.455.2.91.4,1.355.635a22.618,22.618,0,0,1,3.568,2.361V166.2H91.355V158l-38.205,8.162L14.933,158v8.194H10v53.629H45.982v5.367H38.826v3.578h28.6V225.19H60.284l.011-5.357ZM18.511,166.2v-3.779l17.7,3.779,15.128,3.229v46.4l-32.828-7.008V166.2Zm40.736,11.37,23.544-7.781,1.122,3.4-23.544,7.781Zm-13.339,3.4-23.554-7.781,1.122-3.4,23.554,7.781Zm0,9.581-23.554-7.781,1.122-3.4,23.554,7.781ZM23.5,188.965l23.533,7.781-1.122,3.388-23.533-7.781Zm0,9.58,23.533,7.781-1.122,3.388-23.533-7.781Zm77.565,17.16-.265-.222-.572.688-2.2-1.842a18.835,18.835,0,0,0-1.757-23.851,16.49,16.49,0,0,0-1.715-1.726,20.274,20.274,0,0,0-1.863-1.3c-.445-.286-.889-.582-1.355-.826a19.47,19.47,0,0,0-1.789-.826,17,17,0,0,0-1.789-.625,19.354,19.354,0,0,0-5.5-.868,19.12,19.12,0,0,0-16.377,29.218c.339.54.667,1.09,1.059,1.6.307.4.656.783.985,1.164.106.127.243.243.371.371a19.973,19.973,0,0,0,1.63,1.651,19.194,19.194,0,0,0,22.443,1.556,19.335,19.335,0,0,0,3.4-2.7l.487.4,1.673,1.387-.572.688.265.222L110.3,230.409l3.44-4.118Zm-8.374-.656a16.027,16.027,0,0,1-1.471,1.217,15.342,15.342,0,0,1-17.954,0c-.243-.18-.508-.328-.752-.519-.085-.074-.2-.127-.286-.2a14.628,14.628,0,0,1-1.27-1.292,15.242,15.242,0,0,1-1.313-1.556,15.589,15.589,0,0,1,18.124-23.8,16.073,16.073,0,0,1,1.789.826,15.89,15.89,0,0,1,1.789,1.133c.307.222.635.4.932.646.159.138.275.3.423.423a15.631,15.631,0,0,1,5.145,10.163,15.439,15.439,0,0,1-1.567,8.257,15.733,15.733,0,0,1-2.011,3.176A15.289,15.289,0,0,1,92.689,215.049Z" transform="translate(-10 -158)" fill="#fff" />
              </g>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="170.551" height="60.735" viewBox="0 0 170.551 60.735">
              <g id="Group_337" data-name="Group 337" transform="translate(0.683 1.003)" opacity="0.5">
                <path id="Path_198" data-name="Path 198" d="M3538.283-513.006s28.477-26.6,61.956-27.807c35.078-1.262,75.959,23.625,100.712,51.216" transform="translate(-3538.283 540.859)" fill="none" stroke="#ffba48" stroke-width="2"/>
                <path id="Path_199" data-name="Path 199" d="M22.488,0l5.583,26.7L0,22.488l18.625-5.235Z" transform="translate(137.967 33.361) rotate(-9)" fill="#ffba48"/>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="72.325" height="72.325" viewBox="0 0 72.325 72.325">
              <path id="food" d="M66.674,47.463H60.592c-.1-.54-.226-1.069-.362-1.6l10.846-5.422A2.261,2.261,0,1,0,69.054,36.4L58.707,41.573a24.828,24.828,0,0,0-46.975,5.89H5.65A5.657,5.657,0,0,0,0,53.113a4.525,4.525,0,0,0,1.141,3L9.041,65v1.67a5.657,5.657,0,0,0,5.65,5.65H57.634a5.655,5.655,0,0,0,5.65-5.65V65l7.9-8.887a4.516,4.516,0,0,0,1.144-3A5.655,5.655,0,0,0,66.674,47.463Zm-8.365,0h-1.27l1.126-.565c.043.19.1.373.145.565ZM36.162,29.382a22.611,22.611,0,0,1,20.527,13.2l-2.014,1.006a20.323,20.323,0,0,0-38.334,3.874H14.017A22.638,22.638,0,0,1,36.162,29.382ZM46.5,47.463a11.278,11.278,0,0,0-20.685,0H23.392a13.545,13.545,0,0,1,25.219-.843ZM36.162,45.2a6.746,6.746,0,0,0-5.018,2.26H28.378a8.96,8.96,0,0,1,15.566,0H41.175A6.728,6.728,0,0,0,36.162,45.2Zm0-9.041a15.841,15.841,0,0,0-15.154,11.3H18.676A18.054,18.054,0,0,1,52.65,44.6L50.632,45.61A15.846,15.846,0,0,0,36.162,36.162Zm22.6,27.122v3.39a1.132,1.132,0,0,1-1.13,1.13H14.691a1.13,1.13,0,0,1-1.13-1.13v-3.39L4.52,53.113a1.13,1.13,0,0,1,1.13-1.13H66.674a1.132,1.132,0,0,1,1.13,1.13ZM18.029,26.471c-.016-.032-.027-.061-.041-.095-1.173-2.832-.007-5.61,1.046-8.116,1-2.378,1.88-4.484.967-6.539,0-.009-.007-.018-.011-.027l-.007-.02a.029.029,0,0,1,0-.014,1.072,1.072,0,0,1-.072-.382,1.106,1.106,0,0,1,2.138-.4c1.261,2.873.115,5.7-.954,8.243-.99,2.355-1.795,4.543-.947,6.536a.077.077,0,0,1,0,.045,1.067,1.067,0,0,1,.041.283,1.137,1.137,0,0,1-1.135,1.137,1.125,1.125,0,0,1-1-.61h0C18.04,26.5,18.036,26.484,18.029,26.471Zm27.522-.33c-.014-.029-.025-.061-.036-.09-1.173-2.832-.009-5.612,1.042-8.118,1-2.378,1.88-4.484.967-6.539a.064.064,0,0,0-.009-.027c0-.007,0-.014-.009-.02v-.014a1.126,1.126,0,0,1-.075-.382,1.108,1.108,0,0,1,2.14-.4c1.261,2.873.115,5.7-.954,8.243-.99,2.355-1.792,4.543-.949,6.536a.053.053,0,0,1,0,.045,1.168,1.168,0,0,1,.041.283,1.134,1.134,0,0,1-2.14.524h0a.161.161,0,0,0-.018-.041ZM33.945,16.3c-.016-.032-.027-.061-.043-.093-1.175-2.832-.009-5.612,1.044-8.118,1-2.378,1.88-4.484.967-6.539,0-.009-.007-.018-.009-.027L35.9,1.5a.029.029,0,0,1,0-.014,1.072,1.072,0,0,1-.072-.382,1.107,1.107,0,0,1,2.14-.4c1.261,2.873.115,5.7-.954,8.243-.99,2.355-1.795,4.543-.947,6.536a.077.077,0,0,1,0,.045,1.066,1.066,0,0,1,.041.283,1.131,1.131,0,0,1-2.136.524h0C33.956,16.327,33.952,16.314,33.945,16.3Z" transform="translate(0 0)" fill="#fff" />
            </svg>
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
