import React, {Component} from 'react';

import axios from 'axios';

const ContextProducts = React.createContext();
export const ProductosConsumer = ContextProducts.Consumer;

class ProductosProvider extends Component {

    state = {
        productos: []
    }

    obtenerProductos = async (busqueda) => {
        let url = `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda.nombre}`;
        const productos = await axios(url);
        this.setState(
            {
                productos: productos.data.results
            }
        )
    }

    render() {
        return (
            <ContextProducts.Provider
                value={{
                    productos: this.state.productos,
                    obtenerProductos: this.obtenerProductos
                }}
            >
                {this.props.children}
            </ContextProducts.Provider>
        );
    }

}

export default ProductosProvider;
