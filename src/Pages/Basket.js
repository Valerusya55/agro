import React, { Component } from 'react'

export default class Basket extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-lg-8 col-md-8 col-xs-8 thumb">
                <div className='basketProduct'>
                    <h1>ТОВАРЫ</h1>
                    <div className='lineSearch'></div>
                    <img src='tovar.jpg'></img>
                    <a href=''>Название товара</a>
                    <div className='lineSearch'></div>
                    <img src='tovar.jpg'></img>
                    <a href=''>Название товара</a>
                    <div className='lineSearch'></div>
                    <img src='tovar.jpg'></img>
                    <a href=''>Название товара</a>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                <div className='order'>
                    <p>ЗАКАЗЫ</p>
                    <select className="select" data-mdb-filter="true">
                        <option defaultValue>Все</option>
                        <option value="1">Активные</option>
                        <option value="2">Завершенные</option>
                        <option value="3">Отмененные</option>
                    </select>
                </div>
            </div>
        </div>
    )
  }
}
