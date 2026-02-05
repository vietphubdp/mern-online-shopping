import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Category from './CategoryComponent';
import Product from './ProductComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {
    static contextType = MyContext; // using this.context to access global state

    render() {
        // Chưa đăng nhập thì không render menu/routes ở đây (LoginComponent sẽ lo)
        if (this.context.token === '') return <div />;

        // Đã đăng nhập -> render Menu + Routes
        return (
            <div className="body-admin">
                <Menu />

                <Routes>
                    <Route path="/" element={<Navigate replace to="/admin/home" />} />
                    <Route path="/admin" element={<Navigate replace to="/admin/home" />} />
                    <Route path="/admin/home" element={<Home />} />
                    <Route path="/admin/category" element={<Category />} />
                    <Route path='/admin/product' element={<Product />} />
                </Routes>
            </div>
        );
    }
}

export default Main;
