import React from "react";

import {
    Card,
    withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({
    card: {
        margin: "16px",
        padding: "16px",
    }
});

class CardProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            whNUM: 0,
        };
        this.onresize = this.onresize.bind(this);
    }

    onresize() {
        this.setState({whNUM: 100});
    }

    componentDidMount() {
        this.onresize();
    }

    render() {
        const {
            classes,
            product
        } = this.props;
        window.addEventListener("resize", this.onresize);
        return (
            <Card className={classes.card}>
                <div className="uk-card card-center">
                    <div className="uk-card-media-left">
                        {
                            product.thumbnail
                                ? <img src={product.thumbnail} width="180" alt={product.title}/>
                                : null
                        }
                    </div>
                    <div className="uk-card-body">
                        <div className="uk-card-title">${product.price}</div>
                        <h3 className="uk-card-title">{product.title}</h3>
                    </div>
                </div>
            </Card>
        );
    }

}

CardProduct.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardProduct);
