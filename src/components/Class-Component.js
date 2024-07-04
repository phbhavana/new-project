import React from "react";
class Class extends React.Component {
    render() {
        return(
            <div>
                <h1> Class Component {this.props.name}  {this.props.loc}</h1>
            </div>
        )
    }

}
export default Class;