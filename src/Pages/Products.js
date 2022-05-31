import React, { Component } from 'react';
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
