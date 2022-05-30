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
                                    <input type="text" className="form-control" name="login" id="login" placeholder="email"></input>
                                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Введите новый пароль"></input>
                                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Повторите пароль"></input>
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
