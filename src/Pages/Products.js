import React, { Component } from 'react'
import dropend from 'react-dropdown';
import { Dropdown } from 'react-bootstrap';


export default class Products extends Component {
    render() {
        return (
            <>
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
                    <div className='products'>
                        <div className="rowFiltr">
                            <img src='filtr.png'></img>
                            <select className="select" data-mdb-filter="true">
                                <option defaultValue>Цена</option>
                                <option value="1">400-800</option>
                                <option value="2">800-1600</option>
                                <option value="3">1600-3200</option>
                                <option value="4">3200-6400</option>
                            </select>
                            <a href=''>По алфавиту</a>
                        </div>
                        <div className="row">
                            <div className="col col-lg-1 col-md-1  col-md-offset-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className=" col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className="col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className="col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className="col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className="col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className="col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className="col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                            <div className=" col col-lg-1 col-md-1 col-xs-1 thumb scale">
                                <a href='/product'><img src='tovar.jpg'></img>
                                    <p>Товар</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
