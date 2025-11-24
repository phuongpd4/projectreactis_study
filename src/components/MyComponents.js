import React from "react";
class MyComponents extends React.Component {
    /// JSX
    render() {

        return (
            <p>
                My first component
                {Math.random()}
            </p>

        );
    }
}
export default MyComponents;