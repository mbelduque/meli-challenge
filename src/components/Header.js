import React, {Component} from 'react';

import {ProductosConsumer} from '../context/ContextProducts';
import Logo from '../assets/Logo_ML@2x.png.png.png';

class Header extends Component {

    state = {
        nombre: ''
    }

    obtenerDatosProducto = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const img = <img src={Logo} width={80} alt="Mercado Libre"/>;
        return (
            <ProductosConsumer>
                {(value) => {
                    return (
                        <nav>
                            <div className="uk-navbar-center navBar">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="uk-navbar-item uk-logo">{img}</a>
                                <div className="uk-navbar-item">
                                    <form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            value.obtenerProductos(this.state)
                                        }}
                                    >
                                        <div className="uk-margin vertical-center">
                                            <div className="uk-inline">
                                                <input
                                                    name="nombre"
                                                    className="uk-input uk-form-width-large buscar"
                                                    type="text"
                                                    placeholder="Nunca dejes de buscar"
                                                    onChange={this.obtenerDatosProducto}
                                                />
                                                <span className="uk-form-icon uk-form-icon-flip"
                                                      uk-icon="icon: search"></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    )
                }}
            </ProductosConsumer>
        );
    }

}

export default Header;
