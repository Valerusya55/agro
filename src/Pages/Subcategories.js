import React, { Component } from 'react'
import { getCategoryById } from './Categories/actions';
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
        <a href={`/categories/${subcategory.category.id}/subcategories/${subcategory.id}`}>
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
export default (props) => (
  <Subcategories
    {...props}
    params={useParams()}
  />
);