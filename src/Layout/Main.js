import React from 'react';
import Header from '../Componenet/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Componenet/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;