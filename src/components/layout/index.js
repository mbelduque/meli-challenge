import React from 'react';

import {
    Container,
    Wrapper
} from "./styles";
import {Header} from "../header";
import {Results} from "../results";

export const Layout = () => {
    return (
        <Container>
            <Header/>
            <Wrapper>
                <Results/>
            </Wrapper>
        </Container>
    );
}
