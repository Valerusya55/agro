import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export default class Product extends Component {
  render() {
    return (
      <div className='productMenu'>
        <div className='topLinks'>
          <p>НАЗВАНИЕ ВЫБРАННОЙ КАТЕГОРИИ</p>
          <a href='/'>Главная</a>-
          <a href='/'>Категория</a>-
          <a href='/'>Подкатегория</a>
        </div>
        <div className='productsMain'>
          <div className='verticalMenu'>
            <nav className="nav flex-column">
              <p>
                <a class="btn" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Кнопка рабочая ▼</a>
              </p>
              <div class="row">
                <div class="col">
                  <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                    <a className="" href="#">Опрыскиватели</a>
              <a className="" href="#">Крестовины и карданные валы</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="" href="#">Опрыскиватели</a>
              <a className="" href="#">Крестовины и карданные валы</a>
              <a className="" href="#">Элеваторное оборудование</a>
              <a className="" href="#">Сельхозмашины</a>
              <a className="" href="#">Цепи и транспортеры</a>
            </nav>
          </div>

          <div className='product'>
            <div className="row">
              <div className="col col-lg-4 col-md-4  col-md-offset-4 col-xs-4 thumb scale">
                <a href='/product'><img src='tovar.jpg'></img>
                </a>
              </div>
              <div className="col col-lg-8 col-md-8  col-md-offset-8 col-xs-8 thumb">
                <p className='article'>Артикул</p>
                <p className='nameProduct'>Название товара</p>
                <div className='lineProduct'></div>
                <p className='price'>25 руб./шт.</p>
                <p className='availability'>Есть в наличии</p>
                <div className='count'>
                  <button onClick={'decrement()'}>-</button>
                  <h2 id='root'></h2>
                  <button onClick={'increment()'}>+</button>
                </div>
                <button>В корзину</button>
                <p className='availability'>Наши менеджеры обязательно свяжутся с вами и уточнят условия заказа</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
/*<script>
var counter = document.querySelector('.counter');
document.getElementById('root').innerText=data;
function decrement(){
  data = data - 1;
  document.getElementById('root').innerText=data;
}
 function increment(){
  data = data + 1;
  document.getElementById('root').innerText=data;
}
</script>*/
