import React, { Component } from 'react'
import Password from './Password'
import AuthService from '../services/auth.service';
import CheckButton from 'react-validation/build/button';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { useNavigate } from 'react-router-dom';



const required = value => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert">
                This filed is required!
            </div>
        );
    }
};

function NavigateHistory() {
    const { navigate } = useNavigate();
    return (
        navigate("/user")
    );
}

export default class Autorization extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();


        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    <NavigateHistory />
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <>
                <a type="button" data-toggle="modal" data-target=".bd-example-modal-md">Войти</a>
                <div className="modal fade bd-example-modal-md" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="container mt-4">
                                <h3>Личный кабинет</h3>
                                <Form onSubmit={this.handleLogin} ref={c => { this.form = c }}>
                                    <div>
                                        <Input type="text" className="form-control" name="login_auth" id="login_auth" placeholder="email"
                                            value={this.state.email} onChange={this.onChangeEmail} validations={[required]} />
                                        <Input type="password" className="form-control" name="pass_auth" id="pass_auth" placeholder="Пароль"
                                            autoComplete="off" value={this.state.password} onChange={this.onChangePassword}
                                            validations={[required]} />
                                        <button disabled={this.state.loading}>
                                            {this.state.loading && (<span className='spinner-border spinner-border-sm'></span>)}
                                            Войти
                                        </button>
                                    </div>

                                    {this.state.message && (<div className='alert alert-danger' role='alert'>
                                        {this.state.message}
                                    </div>
                                    )}
                                    <CheckButton style={{ display: "none" }}
                                        ref={c => { this.checkBtn = c; }} />
                                </Form>
                                <Password />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}