import React, { Component } from 'react'
import CarouselBox from '../../Components/carouselBox/CarouselBox'
import { getCategories } from '../categories/actions';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    getCategories().then(response => {
      this.setState({ categories: response.categories });
    })
  }

  getCategoryList = () => {
    return this.state.categories.slice(0, 3).map(category => (
      <div key={category.id} className="col-lg-4 col-md-4 col-xs-4 thumb scale">
        <a href={`categories/${category.id}/subcategories`}>
          <img src={category.imgURL} alt={category.name}></img>
          <p>{category.name}</p>
        </a>
      </div>
    ));
  };
  render() {
    return (
      <>
        <CarouselBox />
        <div className='mainCatalog'>
          <p>Запчасти</p>
          <a href='/categories'>Весь каталог</a>
        </div>
        <div className='catalog'>
          <div className="row">
            {this.getCategoryList()}
          </div>
        </div>
      </>
    )
  }
}
