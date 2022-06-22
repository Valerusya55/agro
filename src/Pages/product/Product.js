import React, { Component } from 'react';
import { getProductById, getCatalog } from '../categories/actions';
import Counter from '../../Components/counter/Counter';
import { useParams } from 'react-router-dom';
import './Product.css';

function Availability(props) {
  const available = props.available;
  if (available) {
    return <p className='availability'> В наличии</p>
  }
  return <p className='availability'> Нет в наличии</p>;
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      catalog: [],
    };
  }

  componentDidMount() {
    getProductById(this.props.params.idCategory, this.props.params.idSubcategory, this.props.params.idProduct).then(response => {
      this.setState({ product: response.product });
    })
    getCatalog().then(response => {
      this.setState({ catalog: response.catalog });
    })
  }

  getProduct = () => {
    const { product } = this.state;
    return (
      <div className="row">
        <div className="col col-lg-4 col-md-4  col-md-offset-4 col-xs-4 thumb">
          <img src={product.imgURL}></img>
        </div>
        <div className="col col-lg-8 col-md-8  col-md-offset-8 col-xs-8 thumb">
          <p className='nameProduct'>{product.name}</p>
          <div className='lineProduct'></div>
          <p className='price'>{product.price} руб./шт.</p>
          <Availability available={product.available} />
          <p className='availability'>Наши менеджеры обязательно свяжутся с вами и уточнят условия заказа</p>
          <Counter />
        </div>
      </div>
    )
  };

  getTopLinksProduct = () => {
    return (
      <div className='topLinks'>
        <a href='/categories'>Каталог</a>-
        <a href={`/categories/${this.state.product.subcategory && this.state.product.subcategory.category.id}/subcategories/`}>
          {this.state.product.subcategory && this.state.product.subcategory.category.name}</a>-
        <a href={`/categories/${this.state.product.subcategory && this.state.product.subcategory.category.id}/subcategories/
            ${this.state.product.subcategory && this.state.product.subcategory.id}/products`}>
          {this.state.product.subcategory && this.state.product.subcategory.name}</a>-
        <a href={`/categories/${this.state.product.subcategory && this.state.product.subcategory.category.id}/subcategories/
            ${this.state.product.subcategory && this.state.product.subcategory.id}/products/${this.state.product && this.state.product.id}`}>
          {this.state.product && this.state.product.name}</a>
      </div>
    )
  };

  getAllCategories = () => {
    return this.state.catalog.map(category => (
      <>
        <a className="btn" data-toggle="collapse" href={`#multiCollapseExample${category.category.id}`}
          aria-expanded="false" aria-controls={`multiCollapseExample${category.category.id}`}>
          {category.category.name} ▼
        </a>
        <div className="collapse multi-collapse" id={`multiCollapseExample${category.category.id}`}>
          <div className="card">
            {category.subcategories.map(subcategory => (
              <a href={`/categories/${subcategory.category.id}/subcategories/${subcategory.id}/products`}>
                {subcategory.name}
              </a>
            ))}
          </div>
        </div>
      </>
    ));
  };

  render() {
    return (
      <>
        {this.getTopLinksProduct()}
        <div className='productMenu'>
          <div className='verticalMenu'>
            {this.getAllCategories()}
          </div>
          <div className='product'>
            {this.getProduct()}
          </div>
        </div>
      </>
    )
  }
}
export default (props) => (
  <Product
    {...props}
    params={useParams()}
  />
);