import React, { Component } from 'react'

export default class ChangeData extends Component {
    render() {
        return (
            <><a type="button" data-toggle="modal" data-target="#myModalChange">Изменить профиль</a>
                <div id="myModalChange" className="modal fade bd-example-modal-md" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="container mt-4">
                                <h3>Изменить профиль</h3>
                                <form>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Имя"></input>
                                    <input type="text" className="form-control" name="login" id="login" placeholder="email"></input>
                                    <input type="password" className="form-control" name="phone" id="phone" placeholder="Номер телефона"></input>
                                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Пароль"></input>
                                    <input type="password" className="form-control" name="repeatPass" id="repeatPass" placeholder="Повторите пароль"></input>
                                    <div className='btnReg'>
                                        <a href="#" type="submit">Изменить</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
