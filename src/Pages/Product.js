import React, { Component } from 'react';
import Counter from '../Components/Counter';

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
            <div className="row">
              <div className="col col-lg-4 col-md-4  col-md-offset-4 col-xs-4 thumb">
                <a href='/product'><img src='tovar.jpg'></img>
                </a>
              </div>
              <div className="col col-lg-8 col-md-8  col-md-offset-8 col-xs-8 thumb">
                <p className='nameProduct'>Название товара</p>
                <div className='lineProduct'></div>
                <p className='price'>25 руб./шт.</p>
                <p className='availability'>Есть в наличии</p>
                <Counter />
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
