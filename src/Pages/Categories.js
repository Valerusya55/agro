import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Categories extends Component {
  render() {
    return (
      <div className='catalog'>
        <div className="row gy-5">
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/subcategories'><img src='tovar.jpg'></img>
              <p>Гидравлика</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
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
          </div>
        </div>
      </div>
    )
  }
}
