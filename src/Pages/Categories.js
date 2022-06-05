import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getCategories } from './Categories/actions';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    alert('did mount');
    getCategories().then(res => {
      alert(res);
      this.setState({categories: res});
    })
  }
  
  getCategoryList = () => {
    this.state.categories.map( category => (
       <div className="row gy-5">
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <Link to={'/${categiry.id}/subcategories'}>
              <img src={category.imgURL}></img>
              <p>{category.name}</p>
            </Link>
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
{/* <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/subcategories'><img href="/" src='tovar.jpg'></img>
              <p>Опрыскиватели</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/subcategories'><img href="/" src='tovar.jpg'></img>
              <p>Крестовины и карданные валы</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/subcategories'><img src='tovar.jpg'></img>
              <p>Элеваторное оборудование</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/subcategories'><img src='tovar.jpg'></img>
              <p>Сельхозмашины</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/subcategories'><img src='tovar.jpg'></img>
              <p>Цепи и транспортеры</p>
            </a>
          </div> */}