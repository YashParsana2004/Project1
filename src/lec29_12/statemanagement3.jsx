import * as React from "react";

class StateMerge extends React.Component {
    state = {
        first: "Loading.......",
        second: "Loading.......",
        third: "Loading........",
        fourth: "Loading........",
        cmpltmsg: "Loading done",
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({ first: "Done" })
        }, 2000)

        setTimeout(() => {
            this.setState({ second: "Done" })
        }, 4000)

        setTimeout(() => {
            this.setState({ third: "Done" })
        }, 6000)

        setTimeout(() => {
            this.state((state) => { 
                ({
                    ...state,
                    first: state.cmpltmsg,
                    second: state.cmpltmsg,
                    third: state.cmpltmsg,
                    fourth: state.cmpltmsg,
                    cmpltmsg: "All tasks completed",

                })
            })
        },8000);
    }

    render() {
        return (
            <div>
                <ul>
                    {Object.keys(this.state)
                        .filter(key => key !== "cmpltmsg")
                        .map((keys) => (
                            <li key={keys}>
                                <strong>{keys}: </strong>{this.state[keys]}
                            </li>
                    ))}
                </ul>
            </div>
        )
     }
}

export default StateMerge;