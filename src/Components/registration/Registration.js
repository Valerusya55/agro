import React, { Component } from 'react';
import './Registration.css';
import { isEmail, isMobilePhone } from 'validator';
import AuthService from '../../services/auth.service';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                This filed is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className='alert alert-danger' role="alert">
                Некорректный email.
            </div>
        );
    }
};

const phone = value => {
    if (!isMobilePhone(value)) {
        return (
            <div className='alert alert-danger' role="alert">
                Некорректный номер телефона.
            </div>
        );
    }
};

const vname = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className='alert alert-danger' role="alert">
                Имя должно быть от 3 до 20 символов.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className='alert alert-danger' role="alert">
                Пароль должен быть от 6 до 40 символов.
            </div>
        );
    }
};

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            successful: false,
            message: ""
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.name,
                this.state.email,
                this.state.phone,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }

    render() {
        return (
            <>
                <a type="button" data-toggle="modal" data-target="#myModal">Регистрация</a>
                <div id="myModal" className="modal fade bd-example-modal-md" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="container mt-4">
                                <h3>Регистрация</h3>
                                <Form onSubmit={this.handleRegister} ref={c => { this.form = c }}>
                                    {!this.state.successful && (
                                        <div>
                                            <Input type="text" className="form-control" name="name_reg" id="name_reg"
                                                placeholder="Имя" value={this.state.name} onChange={this.onChangeName}
                                                validations={[required, vname]} />
                                            <Input type="email" className="form-control" name="email_reg" id="email_reg"
                                                placeholder="email" value={this.state.email} onChange={this.onChangeEmail}
                                                validations={[required, email]} />
                                            <Input type="tel" className="form-control" name="phone_reg" id="phone_reg"
                                                placeholder="Номер телефона" autoComplete="off" value={this.state.phone}
                                                onChange={this.onChangePhone} validations={[required, phone]} />
                                            <Input type="password" className="form-control" name="pass_reg" id="pass_reg"
                                                placeholder="Пароль" autoComplete="off" value={this.state.password}
                                                onChange={this.onChangePassword} validations={[required, vpassword]} />
                                            <button>Зарегистрироваться</button>
                                        </div>
                                    )}

                                    {this.state.message && (
                                        <div
                                            className={
                                                this.state.successful
                                                    ? "alert alert-success"
                                                    : "alert alert-danger"
                                            }
                                            role="alert"> {this.state.message}
                                        </div>
                                    )}
                                    <CheckButton style={{ display: "none" }}
                                        ref={c => { this.checkBtn = c; }} />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
/* */