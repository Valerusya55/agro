import React, { Component } from 'react'
import { getCategories } from './actions';
import {Link} from "react-router-dom";

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      categoryId: null,
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then(response => {
      this.setState({ categories: response.categories });
    })
  }

  showSubcategories = (id)=> {
    this.setState({show: true, categoryId: id});
  }


  getCategoryList = () => {
    return this.state.categories.map(category => (
      <div className="col-lg-4 col-md-4 col-xs-4 thumb scale" key={category.id}
           onClick={() => this.showSubcategories(category.id)}
      >
        <Link to={category.id}>
         <img src={category.imgURL} alt={category.name}></img>
          <p>{category.name}</p>
           </Link>
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
