import React from 'react';

interface ClassProps {
    name: string;
    loc: string;
}

class Class extends React.Component<ClassProps> {
    render() {
        return (
            <div>
                <h1>Class Component {this.props.name} {this.props.loc}</h1>
            </div>
        );
    }
}

export default Class;
