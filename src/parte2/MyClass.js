import React, { Component } from 'react'

export default class Class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }


    componentDidUpdate() {
        setTimeout(() => {
            console.log('counter é', this.state.counter)
        }, 3000)
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }



    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </ >
        )
    }
}