import * as React from "react";

class StateXYZ extends React.Component {
    state = {
        first: false,
        second: 3.14,
        third: "Hello ♥",
        fourth: [1, 2, 3, 4, 5],
        fifth: "Red",
        sixth: "Green"
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({
                first: true,
                second: 0.12,
                third: "Hello World!",
                fourth: [6, 7, 8, 9, 10],
                fifth: "Blue",
                sixth: "Pink"
            });
        }, 3000);
                
    }


    render() {
        const { first, second, third, fourth, fifth, sixth } = this.state;
        return (
            <div>
                <button disabled={first}> My Button </button>
                <p>Value of float variable is <strong> {second} </strong></p>
                <p>Value of string variable is <strong> {third} </strong></p>
                <p>Value of array is <strong> {fourth} </strong></p>
                <p style={{ color: fifth }}>Value of String variable <strong>{third}</strong></p>
                <p style={{ color: sixth }}>Value of String variable <strong>{third}</strong></p>
            </div>
        );
    }
}



export default StateXYZ;