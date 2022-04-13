import React from 'react';

import {
    Container,
    Wrapper
} from "./styles";
import Logo from '../../assets/Logo_ML@2x.png.png.png';

export const Header = () => {
    const img = <img className="uk-margin-medium-right" src={Logo} width={76} alt="Mercado Libre"/>;
    return (
        <Container>
            <Wrapper>
                <div className="uk-navbar-center">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="uk-navbar-item uk-logo">{img}</a>
                    <div className="uk-navbar-item">
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                            }}
                        >
                            <div className="uk-margin">
                                <div className="uk-inline">
                                    <input
                                        name="nombre"
                                        className="uk-input uk-form-width-large wd-input-search"
                                        type="text"
                                        placeholder="Nunca dejes de buscar"
                                    />
                                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}
