import React, { Fragment } from 'react';
import Item from './Item/Item';

class Items extends React.Component {

    constructor() {
        super();
        this.state = { items: this.itemsList }
    }

    itemsList = [
        {
            id: 'e1',
            img: 'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
            title: 'Best of Paris in 7 Days Tour',
            cost: '1,995',
            details: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You\'ll also enjoy guided neighborhood walks through the city\'s historic heart as well as quieter moments to slow down and savor the city\'s intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!'
        },
        {
            id: 'e2',
            img: 'https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg',
            title: 'Best of Ireland in 14 Days Tour',
            cost: '3,895',
            details: 'Rick Steve\'s Best of Ireland tour kicks off with the best of Dublin, followed by Ireland\'s must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...'
        },
        {
            id: 'e3',
            img: 'https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg',
            title: 'Best of Salzburg & Vienna in 8 Days Tour',
            cost: '2,695',
            details: 'Let\'s go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria\'s Golden Age. Your Rick Steves guide will bring this regions rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!'
        },
        {
            id: 'e4',
            img: 'https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg',
            title: 'Best of Rome in 7 Days Tour',
            cost: '2,095',
            details: 'Our Rome tour serves up Europe\'s most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...'
        }
    ];

    removeItemsHandler(item) {
        const index = this.itemsList.indexOf(item);
        let newItemsList;
        if (index > -1) {
            newItemsList = this.itemsList.splice(index, 1);
        }
        this.setState({
            items: newItemsList
        })
    }

    render() {
        const data = this.itemsList.map(item => <Item key={item.id} img={item.img} title={item.title} cost={item.cost} details={item.details} removeItemHandler={this.removeItemsHandler.bind(this, item)} />);
        return (
            <Fragment>
                {data}
            </Fragment>
        )
    }

}

export default Items;