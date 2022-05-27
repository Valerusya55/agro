import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'

export default class Main extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <div className='mainCatalog'>
          <p>Запчасти</p>
          <a href='/categories'>Весь каталог</a>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-4 thumb">
            <a href='/'><img src='tovar.jpg'></img>
              <p>Гидравлика</p>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-4 thumb">
            <a href='/'><img href="/" src='tovar.jpg'></img>
              <p>Опрыскиватели</p>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-xs-4 thumb">
            <a href='/'><img href="/" src='tovar.jpg'></img>
              <p>Крестовины и карданные валы</p>
            </a>
          </div>
        </div>
      </>
    )
  }
}
