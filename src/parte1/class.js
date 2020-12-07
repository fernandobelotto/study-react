import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    };

    render() {
        const { counter } = this.state;

        return (
            <>
                <h1>{counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        );
    }
}
