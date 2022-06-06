import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getCategories } from './Categories/actions';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then(res => {
      this.setState({categories: res});
    })
  }
  
  getCategoryList = () => {
    return this.state.categories.map( category => (
       <div className="row gy-5">
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">            
            <a href={`/${category.id}/subcategories`}>
              <img src={category.imgURL} alt={category.name}></img>
              <p>{category.name}</p>
            </a>
          </div>          
        </div>
    ));
  };

  render() {   
    return (
      <div className='catalog'>
        {this.getCategoryList()}
      </div>
    );
  }
}
