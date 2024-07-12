import React from "react";
import Counter from "./counter";

interface ConnectState {
    count: number;
}

class Connect extends React.Component<{}, ConnectState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("componentDidMount: when Component renders the first time");
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    render() {
        return (
            <div>
                <Counter number={this.state.count} />
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Connect;
