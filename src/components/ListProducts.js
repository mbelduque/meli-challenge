import React from 'react';

import {ProductosConsumer} from '../context/ContextProducts';
import GridProducts from './GridProducts';

const ListProducts = () => {

    return (
        <div className="uk-child-width-1@m">
            <ProductosConsumer>
                {(value) => {
                    return value.productos.map(producto => (
                        <GridProducts
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                }}
            </ProductosConsumer>
        </div>
    );

}

export default ListProducts;
