import React, { Component } from 'react';
import { getProductById } from './Categories/actions';
import Counter from '../Components/Counter';
import { useParams } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    getProductById(this.props.params.idCategory, this.props.params.idSubcategory, this.props.params.idProduct).then(response => {
      this.setState({ product: response.product });
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
          <p className='availability'>Есть в наличии</p>
          <Counter />
          <p className='availability'>Наши менеджеры обязательно свяжутся с вами и уточнят условия заказа</p>
        </div>
      </div>
    )
  };

  getTopLinksProduct = () => {
    console.log(this.state.product.subcategory);
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

  render() {
    return (
      <>
        {this.getTopLinksProduct()}
        <div className='productMenu'>
          <div className='verticalMenu'>
            <a className="btn" data-toggle="collapse" href="#multiCollapseExample1"
              aria-expanded="false" aria-controls="multiCollapseExample1">Гидравлика ▼</a>
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card">
                <a className="" href="#">Опрыскиватели</a>
                <a className="" href="#">Крестовины и карданные валы</a>
              </div>
            </div>
            <a className="btn" data-toggle="collapse" href="#multiCollapseExample2"
              aria-expanded="false" aria-controls="multiCollapseExample2">Опрыскиватели ▼</a>
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card">
                <a className="" href="#">Опрыскиватели</a>
                <a className="" href="#">Крестовины и карданные валы</a>
              </div>
            </div>
            <a className="btn" data-toggle="collapse" href="#multiCollapseExample3"
              aria-expanded="false" aria-controls="multiCollapseExample3">Крестовины и карданные валы ▼</a>
            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="card">
                <a className="" href="#">Опрыскиватели</a>
                <a className="" href="#">Крестовины и карданные валы</a>
              </div>
            </div>
            <a className="btn" data-toggle="collapse" href="#multiCollapseExample4"
              aria-expanded="false" aria-controls="multiCollapseExample4">Элеваторное оборудование ▼</a>
            <div className="collapse multi-collapse" id="multiCollapseExample4">
              <div className="card">
                <a className="" href="#">Опрыскиватели</a>
                <a className="" href="#">Крестовины и карданные валы</a>
              </div>
            </div>
            <a className="btn" data-toggle="collapse" href="#multiCollapseExample5"
              aria-expanded="false" aria-controls="multiCollapseExample5">Сельхозмашины ▼</a>
            <div className="collapse multi-collapse" id="multiCollapseExample5">
              <div className="card">
                <a className="" href="#">Опрыскиватели</a>
                <a className="" href="#">Крестовины и карданные валы</a>
              </div>
            </div>
            <a className="btn" data-toggle="collapse" href="#multiCollapseExample6"
              aria-expanded="false" aria-controls="multiCollapseExample6">Цепи и транспортеры ▼</a>
            <div className="collapse multi-collapse" id="multiCollapseExample6">
              <div className="card">
                <a className="" href="#">Опрыскиватели</a>
                <a className="" href="#">Крестовины и карданные валы</a>
              </div>
            </div>
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