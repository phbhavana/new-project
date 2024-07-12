import React from 'react';
interface MyComponentProps {
    name: string;
    loc:string;

  }

const Greet: React.FC<MyComponentProps> = (props) => {
    console.log(props);
    return (
      <div >
        <p>Hello {props.name}</p>
        <p>Welcome {props.loc}</p>
      </div>
    );
  };
  export default Greet
  