import React, { Component } from 'react'
import { getCategories } from './actions';
import './Categories.css';

export default class Categories extends Component {
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
    return this.state.categories.map(category => (
      <div key={category.id} className="col-lg-4 col-md-4 col-xs-4 thumb scale">
        <a href={`categories/${category.id}/subcategories` }>
          <img src={category.imgURL} alt={category.name}></img>
          <p>{category.name}</p>
        </a>
      </div>
    ));
  };

  render() {
    return (
      <div className='catalog'>
        <div className="row gy-5">
          {this.getCategoryList()}
        </div>
      </div>
    );
  }
}
