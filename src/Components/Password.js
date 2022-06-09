import React, { Component } from 'react'

export default class Password extends Component {
    render() {
        return (
            <>
                <a type="button" data-toggle="modal" data-target="#myModalPass">Забыли пароль?</a>
                <div id="myModalPass" className="modal fade bd-example-modal-md" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="container mt-4">
                                <h3>Восстановить пароль</h3>
                                <form>
                                    <input type="text" className="form-control" name="login_pass" id="login_pass" placeholder="email"></input>
                                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Введите новый пароль" autoComplete="off"></input>
                                    <input type="password" className="form-control" name="repeatPass" id="repeatPass" placeholder="Повторите пароль" autoComplete="off"></input>
                                        <button>Восстановить пароль</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
