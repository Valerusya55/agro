import React, { Component } from 'react';
import { getSubcategoryById, getCatalog } from '../categories/actions';
import { useParams } from 'react-router-dom';
import './Products.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            subcategory: {},
            catalog: [],
        };
    }

    componentDidMount() {
        getSubcategoryById(this.props.params.idCategory, this.props.params.idSubcategory).then(response => {
            this.setState({ products: response.products, subcategory: response.subcategory });
        })
        getCatalog().then(response => {
            this.setState({ catalog: response.catalog });
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

    getAllCategories = () => {
        return this.state.catalog.map(category => (
            <div key={category.category.id}>
                <a className="btn" data-toggle="collapse" href={`#multiCollapseExample${category.category.id}`}
                    aria-expanded="false" aria-controls={`multiCollapseExample${category.category.id}`}>
                    {category.category.name} ▼
                </a>
                <div className="collapse multi-collapse" id={`multiCollapseExample${category.category.id}`}>
                    <div className="card">
                        {category.subcategories.map(subcategory => (
                            <a href={`/categories/${subcategory.category.id}/subcategories/${subcategory.id}/products`} key={subcategory.id}>
                                {subcategory.name}
                            </a>
                        ))}
                    </div>
                </div>
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
                        {this.getAllCategories()}
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