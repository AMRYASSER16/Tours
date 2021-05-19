import React, { Fragment } from 'react';
import classes from './Button.module.css';

class Button extends React.Component {
    render() {
        return (
            <Fragment>
                <button className={classes.delete} onClick={this.props.onClick}>{this.props.name}</button>
            </Fragment>
        )
    }

}

export default Button;