import React, { Component } from 'react';
import { getSubcategoryById } from '../categories/actions';
import { useParams } from 'react-router-dom';
import './Products.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            subcategory: {}
        };
    }

    componentDidMount() {
        getSubcategoryById(this.props.params.idCategory, this.props.params.idSubcategory).then(response => {
            this.setState({ products: response.products, subcategory: response.subcategory });
        })
    }

    getProductList = () => {
        return this.state.products.map(product => (
            <div key={product.id} className="col col-lg-2 col-md-2  col-md-offset-2 col-xs-2 thumb scale">
                <a href={`/categories/${this.state.subcategory.category.id}/subcategories/${this.state.subcategory.id}/products/${product.id}`}>
                    <img src={product.imgURL}></img>
                    <p>{product.name}</p>
                </a>
            </div>

        ));
    };

    getTopLinks = () => {
        return (
            <div className='topLinks'>
                <a href='/categories'>Каталог</a>-
                <a href={`/categories/${this.state.subcategory.category && this.state.subcategory.category.id}/subcategories/`}>
                    {this.state.subcategory.category && this.state.subcategory.category.name}</a>-
                <a href={`/categories/${this.state.subcategory.category && this.state.subcategory.category.id}/subcategories/
                ${this.state.subcategory && this.state.subcategory.id}/products`}>
                    {this.state.subcategory && this.state.subcategory.name}</a>
            </div>
        )
    };

    render() {
        return (
            <>
                {this.getTopLinks()}
                <div className='productsMain'>
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
                    <div className='products'>
                        <div className="rowFiltr">
                            <img src={require('../../assets/filtr.png')}></img>
                            <select className="select" data-mdb-filter="true">
                                <option defaultValue>Цена</option>
                                <option value="1">400-800</option>
                                <option value="2">800-1600</option>
                                <option value="3">1600-3200</option>
                                <option value="4">3200-6400</option>
                            </select>
                            <a href=''>По алфавиту</a>
                        </div>
                        <div className="row">
                            {this.getProductList()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default (props) => (
    <Products
        {...props}
        params={useParams()}
    />
);