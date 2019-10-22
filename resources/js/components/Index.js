import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            basket: [],
            loading: false,
            error: null
        }
    }

    getItems() {
        this.setState({
            error: null,
            loading: true
        });

        try {

            axios.get('api/items')
                .then(res => {
                    this.setState({
                        items: res.data
                    })
                })

        } catch (err) {

            this.setState({
                error: err.response.data.message || err.message
            })

        }
    }

    addToBasket(item) {
        if (item !== undefined) {
            this.setState({
                basket: [...this.state.basket, item]
            });
        }

        let array = [...this.state.items]; // make a separate copy of the array
        const index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({items: array});
        }
    }

    removeItem(item) {
        let basket = this.state.basket;

        const index = basket.indexOf(item);

        basket.splice(index, 1);

        this.setState({
            basket: basket,
            items: [...this.state.items, item]
        })

        console.log('basket', this.state.basket);
        console.log('items', this.state.items);
    }

    removeAll() {
        let basket = this.state.basket;
        let items = this.state.items;
        let newItems = items.concat(basket);

        basket.splice(0, basket.length);

        this.setState({
            basket: basket,
            items: newItems
        })
    }

    componentDidMount() {
        this.getItems();
    }

    render() {
        const { items, basket } = this.state;
        let oranges = [];
        let apples = [];

        items.map((item, index) => {
            if (item == 'Orange') {
                oranges.push(item)
            } else if (item == 'Apple') {
                apples.push(item);
            }
        });

        return (
            <div className="container">
                <div className="row basket">
                    <h2>Your basket</h2>
                    {basket.map((item, index) => {
                        return (
                            <div className="item" key={index}>
                                <p>{item}</p>
                                <button onClick={() => this.removeItem(item)}>-</button>
                            </div>)
                    })}
                    <button onClick={() => this.removeAll()}>Remove all</button>
                </div>
                <div className="row items">
                    <div className="col-md-8">
                        <div className="card">
                            <h1>Fruits</h1>
                            <div className="item">
                                <p>{'Oranges ' + oranges.length}</p>
                                <button onClick={() => this.addToBasket(oranges[0])}>+</button>
                            </div>
                            <div className="item">
                                <p>{'Apples ' + apples.length}</p>
                                <button onClick={() => this.addToBasket(apples[0])}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}