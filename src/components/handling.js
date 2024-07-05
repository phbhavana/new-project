import React from "react";
import Counter from "./counter";
class Connect extends React.Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount: when Componenet render first time");
    }
    increment(){
        this.setState({ count : this.state.count + 1})
    }
    decrement(){
        this.setState({count : this.state.count - 1})
    }
    reset(){
        this.setState({count:0})
    }
    render() {
        return(
            <div>
                <Counter number={this.state.count}></Counter>
                <button onClick={()=>{this.increment()}}>+1</button>
                <button onClick={()=>{this.decrement()}}>-1</button>
                <button onClick={()=>{this.reset()}}>Reset</button>

            </div>
        );
    }
}
export default Connect