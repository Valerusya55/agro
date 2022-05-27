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
                <h2><a href=''>ТОВАР</a></h2>
                <div className='searchProduct'>
                    <a href='/'>Главная</a>-
                    <a href='/'>Категория</a>-
                    <a href='/'>Подкатегория</a>
                </div>
                <div className='lineSearch'></div>
                <h2><a href=''>ТОВАР</a></h2>
                <div className='searchProduct'>
                    <a href='/'>Главная</a>-
                    <a href='/'>Категория</a>-
                    <a href='/'>Подкатегория</a>
                </div>
                <div className='lineSearch'></div>
                <h2><a href=''>ТОВАР</a></h2>
                <div className='searchProduct'>
                    <a href='/'>Главная</a>-
                    <a href='/'>Категория</a>-
                    <a href='/'>Подкатегория</a>
                </div>
                <div className='lineSearch'></div>
            </>
        )
    }
}
