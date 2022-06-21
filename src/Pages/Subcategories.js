import React, { Component } from 'react'
import { getCategoryById } from './categories/actions';
import { useParams } from 'react-router-dom';


class Subcategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: []
    };
  }

  componentDidMount() {
    getCategoryById(this.props.params.idCategory).then(response => {
      this.setState({ subcategories: response.subcategories });
    })
  }

  getSubcategoryList = () => {
    return this.state.subcategories.map(subcategory => (
      <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
        <a href={`/categories/${subcategory.category.id}/subcategories/${subcategory.id}/products`}>
          <img src={subcategory.imgURL} alt={subcategory.name}></img>
          <p>{subcategory.name}</p>
        </a>
      </div>
    ));
  };

  getTopLinks = () => {
    return (
      <div className='topLinks'>
        <a href='/categories'>Каталог</a>-
        <a href={`/categories/${this.state.subcategories[0] && this.state.subcategories[0].category.id}/subcategories/`}>
          {this.state.subcategories[0] && this.state.subcategories[0].category.name}</a>
      </div>
    )
  };

  render() {
    return (
      <>
        {this.getTopLinks()}
        <div className='catalog'>
          <div className="row gy-5">
            {this.getSubcategoryList()}
          </div>
        </div>
      </>
    );
  }
}
export default (props) => (
  <Subcategories
    {...props}
    params={useParams()}
  />
);