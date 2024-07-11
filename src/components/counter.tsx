import React from 'react';
class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1>count: {this.props.number}</h1>
            </div>
        )
    }
}
export default Counter