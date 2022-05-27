import React, { Component } from 'react'

export default class Subcategories extends Component {
  render() {
    return (
      <div className='catalog'>
        <div className="row gy-5">
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/products'><img src='tovar.jpg'></img>
              <p>Подкатегория</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/products'><img src='tovar.jpg'></img>
              <p>Подкатегория</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/products'><img src='tovar.jpg'></img>
              <p>Подкатегория</p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/products'><img src='tovar.jpg'></img>
              <p>Подкатегория</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/products'><img src='tovar.jpg'></img>
              <p>Подкатегория</p>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4 thumb scale">
            <a href='/products'><img src='tovar.jpg'></img>
              <p>Подкатегория</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
