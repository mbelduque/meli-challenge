import React from 'react';

import Header from './components/Header';
import ListProducts from './components/ListProducts';
import ProductosProvider from './context/ContextProducts';

function App() {
    return (
        <ProductosProvider>
            <Header/>
            <div className="uk-container uk-margin-medium-top">
                <ListProducts/>
            </div>
        </ProductosProvider>
    );
}

export default App;
