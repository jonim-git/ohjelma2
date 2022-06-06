import React from 'react';
import styles from './styles/oma.css'
import { useState, useEffect } from 'react';
import OrderTable from './components/OrderTable';
import { FilterableProductTable } from './components/FilterableProductTable';
import { AppContext } from './components/AppContext'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Home from './components/Home';


const App = () => {

    return (
        <div>
            <BrowserRouter className='content'>
                <main >
                    <nav>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to='/filterableproducttable'>Products</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to='/ordertable'>Orders</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/filterableproducttable" element={<FilterableProductTable />} />
                        <Route path="/ordertable" element={<OrderTable />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div >

    );
}

export default App;