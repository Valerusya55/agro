import React, { Component } from 'react'
import { FormControl, Form } from 'react-bootstrap';

export default class Search extends Component {
    render() {
        return (
            <>
                <div className='search'>
                    <div className='control'>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Поиск"
                            />
                            <a href='/search'>Найти</a>
                        </Form>
                    </div>
                </div>
                <div className='lineSearch'></div>
                <h2><a href='src/Pages/Search'>Подшипник 60317 А, шт</a></h2>
                <div className='searchProduct'>
                    <a href='/public'>Главная</a>-
                    <a href='/public'>Прочее</a>-
                    <a href='/public'>Подшипники</a>
                </div>
                <div className='lineSearch'></div>
                <h2><a href='src/Pages/Search'>Подшипник "Волжский стандарт" 6-7613А, шт</a></h2>
                <div className='searchProduct'>
                    <a href='/public'>Главная</a>-
                    <a href='/public'>Прочее</a>-
                    <a href='/public'>Подшипники</a>
                </div>
                <div className='lineSearch'></div>
                <h2><a href='src/Pages/Search'>Подшипник № 111, шт</a></h2>
                <div className='searchProduct'>
                    <a href='/public'>Главная</a>-
                    <a href='/public'>Прочее</a>-
                    <a href='/public'>Подшипники</a>
                </div>
                <div className='lineSearch'></div>
            </>
        )
    }
}
