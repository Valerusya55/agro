import React, { Component } from 'react'
import CounterBasket from '../../Components/counterBasket/CounterBasket'
import './Basket.css';


export default class Basket extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-8 col-md-8 col-xs-8 thumb">
                    <div className='basketProduct'>
                        <h1>ТОВАРЫ</h1>
                        <div className='lineSearch'></div>
                        <div className='productBasket'>
                        <img src='tovar.jpg'></img>
                        <a href=''>Название товара</a>
                        <CounterBasket/>
                        <p>25 ₽</p>
                        </div>
                        <div className='lineSearch'></div>
                        <div className='productBasket'>
                        <img src='tovar.jpg'></img>
                        <a href=''>Название товара</a>
                        <CounterBasket/>
                        <p>25 ₽</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-4 thumb">
                    <div className='orderPrice'>
                        <h1>ИТОГО</h1>
                        <div className='lineSearch'></div>
                        <p>Товары, 2 шт.</p>
                        <p>Заказ будет готов 24.02.2022</p>
                        <button>Заказать</button>
                        <img src='sogl.png'></img>
                        <p>Согласен с условиями Правил пользования торговой площадкой и правилами возврата</p>
                    </div>
                </div>
            </div>
        )
    }
}
