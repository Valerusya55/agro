import React, { Component } from 'react'
import { getCategoryById } from './Categories/actions';

export default class Subcategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: []
    };
  }

  componentDidMount() {
    getCategoryById(this.state.subcategories.map(subcategory => (subcategory.category.id))).then(response => {
      this.setState({ subcategories: response.subcategories });
    })
  }

  getSubcategoryList = () => {
    return this.state.subcategories.map(subcategory => (
      <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
        <a href={`categories/${subcategory.category.name}/${subcategory.name}`}>
          <img src={subcategory.imgURL} alt={subcategory.name}></img>
          <p>{subcategory.name}</p>
        </a>
      </div>
    ));
  };

  render() {
    return (
      <div className='catalog'>
        <div className="row gy-5">
          {this.getSubcategoryList()}
        </div>
      </div>
    );
  }
}
