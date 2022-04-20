import React, {Component} from 'react';
import {Grid} from "@material-ui/core";

import CardProduct from "./CardProduct";

class GridProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: [],
        };
    }

    render() {
        const paperStyle = {
            padding: "0px",
            margin: "0px",
        };
        const {post_obj: products_list} = this.state;
        return (
            <div>
                <Grid
                    style={paperStyle}
                    direction="row"
                    alignItems="center"
                >
                    <div style={paperStyle}>
                        <CardProduct post={products_list} product={this.props.producto}/>
                    </div>
                </Grid>
            </div>
        );
    }

}

export default GridProducts;
