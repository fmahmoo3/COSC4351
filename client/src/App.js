import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductList from "./components/product-list.components";
import ViewProduct from "./components/view-product.components";
import ViewCart from "./components/view-cart.components";

import logo from "./logo.png";

function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a
                        className="navbar-brand"
                        href="https://github.com/fmahmoo3/COSC4351"
                    >
                        <img
                            src={logo}
                            width="80"
                            height="45"
                            alt="CatWeAllGetAlong.com"
                        />
                    </a>
                    <Link to="/" className="navbar-brand">
                        CatWeAllGetAlong
                    </Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">
                                    Products
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/cart/1" className="nav-link">
                                    View Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path="/" exact component={ProductList} />
                <Route path="/product/:id" component={ViewProduct} />
                <Route path="/cart/:id" component={ViewCart} />
            </div>
        </Router>
    );
}

export default App;
