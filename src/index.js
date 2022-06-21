import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../src/Pages/main/Main';
import About from '../src/Pages/about/About';
import Categories from './Pages/categories/Categories';
import Production from '../src/Pages/Production';
import Contacts from '../src/Pages/contacts/Contacts';
import Subcategories from '../src/Pages/Subcategories';
import Products from '../src/Pages/products/Products';
import Product from '../src/Pages/product/Product';
import User from '../src/Pages/user/User';
import Search from '../src/Pages/search/Search';
import Basket from '../src/Pages/basket/Basket';
import Header from '../src/Components/header/Header';
import Footer from '../src/Components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path={"/"} element={< Main />} />
        <Route exact path={"/about"} element={< About />} />
        <Route exact path={"/categories"} element={<Categories />} />
        <Route exact path={"/production"} element={< Production />} />
        <Route exact path={"/contacts"} element={< Contacts />} />
        <Route exact path={"/products"} element={< Products />} />
        <Route exact path={"/product"} element={< Product />} />
        <Route exact path={"/user"} element={< User />} />
        <Route exact path={"/search"} element={< Search />} />
        <Route exact path={"/basket"} element={< Basket />} />
        <Route path={"categories/:idCategory/subcategories"} element={<Subcategories />} />
        <Route path={"categories/:idCategory/subcategories/:idSubcategory/products"} element={<Products />} />
        <Route path={"categories/:idCategory/subcategories/:idSubcategory/products/:idProduct"} element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
