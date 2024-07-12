import React from 'react';

interface CounterProps {
    number: number;
}

class Counter extends React.Component<CounterProps> {
    render() {
        return (
            <div>
                <h1>count: {this.props.number}</h1>
            </div>
        );
    }
}

export default Counter;
