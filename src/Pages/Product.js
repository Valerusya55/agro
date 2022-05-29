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
              <div className="btn-group dropend">
                <a className="dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  Гидравлика
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Действие</a></li>
                  <li><a className="dropdown-item" href="#">Другое действие</a></li>
                  <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                </ul>
              </div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Гидравлика
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
