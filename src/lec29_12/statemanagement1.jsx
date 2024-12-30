import * as React from "react";

class StateABC extends React.Component { 
    state = {
        first: true,
        second: 3.14,
        third: "Hello ♥",
        fourth: [1, 2, 3, 4, 5],
    };

    render() {
        const { first, second, third, fourth } = this.state;
        return (
            <div>
                <button disabled={first}> My Button </button>
                <p>Value of float variable is <strong> {second} </strong></p>
                <p>Value of string variable is <strong> {third} </strong></p>
                <p>Value of array is <strong> {fourth} </strong></p>
            </div>
        );
    }
}

export default StateABC;