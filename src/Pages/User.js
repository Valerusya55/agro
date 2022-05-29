import React, { Component } from 'react'
import ChangeData from '../Components/ChangeData'

export default class User extends Component {
    render() {
        return (
            <div className='personalData'>
                <div className="row gy-5">
                    <div className="col-lg-3 col-md-3 col-xs-3 thumb">
                        <img src='avatar.png'></img>
                        <div className='textUser'>
                            <p>Имя</p>
                            <p>mail</p>
                            <p>89136987458</p>
                            <p><ChangeData /></p>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-xs-9 thumb">
                        <div className='order'>
                            <p>ЗАКАЗЫ</p>
                            <p>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Ссылка с href
                                </a>
                                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Кнопка с data-target
                                </button>
                            </p>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    Некоторый заполнитель для компонента сворачивания. Эта панель по умолчанию скрыта, но открывается, когда пользователь активирует соответствующий триггер.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
