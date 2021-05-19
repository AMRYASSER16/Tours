import React, { Fragment } from 'react';
import classes from './Card.module.css';

class Card extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={classes.card}>{this.props.children}</div>
            </Fragment>
        )
    }

}

export default Card;