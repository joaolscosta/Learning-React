import React from 'react';
import './classTest.css';

const Person = (props) => {
    return (
        <React.Fragment>
            <h1>Name: {props.name}</h1>
            <h2>Last Name: {props.lastName}</h2>
            <h2>Age: {props.age}</h2>
        </React.Fragment>
    )
}

const classTest = () => {
    return (
        <div className="App">
            <Person name={"Daniela"} lastName={"Costa"} age={17} />
            <Person name={"João"} lastName={"Costa"} age={20} />
        </div>
    );
}
export default classTest;
