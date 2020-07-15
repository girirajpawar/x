import React from 'react';
import NavBar from '../Nav'
import ProductList from '../Products'
const index = () => {
    return (
        <div className="container">
            <header>
                <NavBar></NavBar>
            </header>
            <ProductList></ProductList>
        </div>
    );
};

export default index;