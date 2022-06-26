import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import logo from './logo.png';
import Registration from '../registration/Registration';
import Autorization from '../Autorization';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';
import user from '../../assets/user.png';
import basket from '../../assets/basket.png';
import AuthService from '../../services/auth.service';
import './Header.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);
		this.state = {
			showAdminBoard: false,
			currentUser: undefined
		};
	}

	componentWillMount() {
		const user = AuthService.getCurrentUser();
		if (user) {
			this.setState({
				currentUser: AuthService.getCurrentUser(),
				//showAdminBoard: user.roles.includes("ROLE_ADMIN")
			});
		}
	}

	logOut() {
		AuthService.logout();
	}
	render() {
		const { currentUser, showAdminBoard } = this.state;
		return (
			<>
				<div className='header'>
					<div className='MenuTop'>
						<div className='one'>
							<img className='headerImage' src={phone}></img>
							<a href="tel:+73812551381">+7(3812)55‒13‒81</a>
							<img className='headerImage' src={mail}></img>
							<a href="mailto:agrozapchast55@mail.ru">agrozapchast55@mail.ru</a>
						</div>
						<div className='two'>
							<img className='headerImage' src={user}></img>
							{currentUser ? (
								<div>
									<a href='/user'>Личный кабинет</a>
									|
									<a href='/' onClick={this.logOut}>Выйти</a>
								</div>
							) : (
								<div>
									<Autorization />
									|
									<Registration />
								</div>
							)}
						</div>
					</div>
					<div className='MenuMiddle'>
						<div className='leftMenu'>
							<Navbar.Brand href="/">
								<img
									src={logo}
									height="100px"
									className="d-inline-block align-top"
									alt="Logo"
								/>
							</Navbar.Brand>
						</div>
						<div className='rightMenu'>
							<div className='control'>
								<Form className="d-flex">
									<FormControl
										type="text"
										placeholder="Поиск"
									/>
									<a href='/search'>Найти</a>
								</Form>
							</div>
							<div className='basket'>
								<a href='/basket'><img src={basket}></img></a>
								<div className="basketInfo">
									<a href="/basket">
										<span>Корзина: </span>
										<span>0</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<Navbar collapseOnSelect expand="md" className='MenuBottom'>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav" className='burgerMenu'>
							<Nav.Link href="/"> ГЛАВНАЯ </Nav.Link>
							<Nav.Link href="/about"> О КОМПАНИИ </Nav.Link>
							<Nav.Link href="/categories"> ПРОДАЖА ЗАПЧАСТЕЙ </Nav.Link>
							<Nav.Link href="/production"> ИЗГОТОВЛЕНИЕ РВД </Nav.Link>
							<Nav.Link href="/contacts"> КОНТАКТЫ </Nav.Link>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</>
		)
	}
}