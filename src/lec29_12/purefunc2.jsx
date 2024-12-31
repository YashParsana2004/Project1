import * as React from "react";

const MyCustomButton = ({ var1, var2 }) => (
    <button disabled={var1}>{ var2}</button>
);

MyCustomButton.defaultProps = {
    var1: false,
    var2: "Default Button Text",
};

export default MyCustomButton;