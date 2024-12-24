import * as React from "react";

class Component2 extends React.Component {
    render() {
        return <div>
            <Component3/>
            <h3>Component 2</h3>
        </div>
    }
}

class Component3 extends React.Component {
    render() {
        return <h2>Component 3</h2>;
    }
}


class Component1 extends React.Component {
    render() {
        return (
            <div>
                <Component2 />
                
                <h1>Component 1</h1>
                <h2>Hello..!!</h2>
            </div>
        );
    }
}

export default Component1;
