import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form } from 'react-bootstrap';
import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from '../Pages/Main';
import About from '../Pages/About';
import Categories from '../Pages/Categories';
import Production from '../Pages/Production';
import Contacts from '../Pages/Contacts';
import Subcategories from '../Pages/Subcategories';
import Products from '../Pages/Products';
import Product from '../Pages/Product';
import Registration from './Registration';
import Autorization from './Autorization';
import User from '../Pages/User';
import Search from '../Pages/Search';
import Basket from '../Pages/Basket';


export default class Header extends Component {
	render() {
		return (
			<>
				<div className='header'>
					<div className='MenuTop'>
						<div className='one'>
							<img className='headerImage' src='phone.png'></img>
							<a href="tel:+73812551381">+7(3812)55‒13‒81</a>
							<img className='headerImage' src='mail.png'></img>
							<a href="mailto:agrozapchast55@mail.ru">agrozapchast55@mail.ru</a>
						</div>
						<div className='two'>
							<img className='headerImage' src='user.png'></img>
							<Autorization />
							|
							<Registration />
						</div>import { Link } from 'react-router-dom';
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
								<a href='/basket'><img src='basket.png'></img></a>
								<div className="basketInfo">
									<a href="/basket">
										<span>Корзина: </span>
										<span>0</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<Navbar collapseOnSelect expand="md" className='MenuBottom' >
						<a href="/"> ГЛАВНАЯ </a>
						<a href="/about"> О КОМПАНИИ </a>
						<Link to="/categories">ПРОДАЖА ЗАПЧАСТЕЙ</Link>
						<a href="/production"> ИЗГОТОВЛЕНИЕ РВД </a>
						<a href="/contacts"> КОНТАКТЫ </a>
					</Navbar>
				</div>
				<Router>
					<Routes>
						<Route exact path={"/"} element={< Main />} />
						<Route exact path={"/about"} element={< About />} />
						<Route exact path={"/categories"} element={<Categories />} />
						<Route exact path={"/production"} element={< Production />} />
						<Route exact path={"/contacts"} element={< Contacts />} />
						<Route exact path={"/subcategories"} element={< Subcategories />} />
						<Route exact path={"/products"} element={< Products />} />
						<Route exact path={"/product"} element={< Product />} />
						<Route exact path={"/user"} element={< User />} />
						<Route exact path={"/search"} element={< Search />} />
						<Route exact path={"/basket"} element={< Basket />} />
					</Routes>
				</Router>
			</>
		)
	}
}