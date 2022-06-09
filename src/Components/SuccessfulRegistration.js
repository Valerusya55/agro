import React, { Component } from 'react'

export default class SuccessfulRegistration extends Component {
  render() {
    return (
        <>
        <a type="button" data-toggle="modal" data-target="#success">Регистрация</a>
        <div id="success" className="modal fade bd-example-modal-md" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="successful">
                        <p>Регистрация прошла успешно!</p>
                        <button>Перейти в личный кабинет</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}
