import React, { Component } from 'react'
import Password from './Password'

export default class Autorization extends Component {
    render() {
        return (
            <>
                <a type="button" data-toggle="modal" data-target=".bd-example-modal-md">Войти</a>
                <div className="modal fade bd-example-modal-md" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="container mt-4">
                                <h3>Личный кабинет</h3>
                                <form>
                                    <input type="text" className="form-control" name="login" id="login" placeholder="email"></input>
                                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Пароль"></input>
                                    <div className='btnReg'>
                                        <a href="/user" type="submit">Войти</a>
                                    </div>
                                    <p><Password /></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
