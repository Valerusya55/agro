import React, { Component } from 'react'

export default class Registration extends Component {
    render() {
        return (
            <>
                <a type="button" data-toggle="modal" data-target="#myModal"  >Регистрация</a>
                <div id="myModal" className="modal fade bd-example-modal-md" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="container mt-4">
                                <h3>Регистрация</h3>
                                <form>
                                    <input type="text" className="form-control" name="name_reg" id="name_reg" placeholder="Имя"></input>
                                    <input type="text" className="form-control" name="login_reg" id="login_reg" placeholder="email"></input>
                                    <input type="password" className="form-control" name="phone_reg" id="phone_reg" placeholder="Номер телефона" autoComplete="off"></input>
                                    <input type="password" className="form-control" name="pass_reg" id="pass_reg" placeholder="Пароль" autoComplete="off"></input>
                                    <input type="password" className="form-control" name="repeatPass_reg" id="repeatPass_reg" placeholder="Повторите пароль" autoComplete="off"></input>
                                    <button>Зарегистрироваться</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
