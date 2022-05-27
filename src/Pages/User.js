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
                            <select className="select" data-mdb-filter="true">
                                <option defaultValue>Все</option>
                                <option value="1">Активные</option>
                                <option value="2">Завершенные</option>
                                <option value="3">Отмененные</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
