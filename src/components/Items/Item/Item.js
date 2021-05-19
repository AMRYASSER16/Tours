import React from 'react';
import classes from './Item.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

class Item extends React.Component {
    render() {
        return (
            <Card>
                <img width='100%' height="350px" src={this.props.img} alt='item' />
                <div className={classes['card-title']}>
                    <span>{this.props.title}</span>
                    <span>${this.props.cost}</span>
                </div>
                <div className={classes.details}>
                    <p>{this.props.details}</p>
                </div>
                <Button name='Delete' onClick={this.props.removeItemHandler} />
            </Card >
        )
    }
}

export default Item;