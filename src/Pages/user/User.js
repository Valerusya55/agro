import React, { Component } from 'react'
import ChangeData from '../../Components/ChangeData'
import AuthService from '../../services/auth.service';
import './User.css';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }
    render() {
        const { currentUser } = this.state;
        return (
            <div className='personalData'>
                <div className="row gy-5">
                    <div className="col-lg-3 col-md-3 col-xs-3 thumb">
                        <img src='avatar.png'></img>
                        <div className='textUser'>
                            <p>{currentUser.name}</p>
                            <p>{currentUser.email}</p>
                            <p>{currentUser.phone}</p>
                            <ChangeData />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-xs-9 thumb">
                        <div>
                            <h2>Заказы</h2>
                            <select className="select" data-mdb-filter="true">
                                <option defaultValue>Все</option>
                                <option value="1">Активные</option>
                                <option value="2">Завершенные</option>
                                <option value="3">Отмененные</option>
                            </select>
                        </div>
                        <div className='rectangleOrder' data-toggle="collapse" href="#multiCollapseExample1" role="button"
                            aria-expanded="false" aria-controls="multiCollapseExample1">
                            <div className='orderInf'>
                                <p>Заказ №123 от 25 сентября 2020 </p>
                                <p><span>Товаров: 2</span></p>
                            </div>
                            <div className='orderInf'>
                                <p>Дата получения:</p>
                                <p><span>28.09.2020</span></p>
                            </div>
                            <div className='orderInf'>
                                <p>3456, 6 ₽</p>
                                <p><span>Оплачено</span></p>
                            </div>
                            <div className='arrow'><p>▼</p></div>
                        </div>
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className='orderProduct'>
                                <div className="card">
                                    <div className='productBasket'>
                                        <img src='tovar.jpg'></img>
                                        <a href=''>Название товара</a>
                                        <p>1 шт.</p>
                                        <p>25 ₽</p>
                                    </div>
                                    <div className='lineSearch'></div>
                                    <div className='productBasket'>
                                        <img src='tovar.jpg'></img>
                                        <a href=''>Название товара</a>
                                        <p>1 шт.</p>
                                        <p>25 ₽</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
