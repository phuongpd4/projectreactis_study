import React from "react";
class MyComponents extends React.Component {

    state = {
        name: "Phuong",
        age: 26,
        address: "Can Tho"
    };

    /// JSX
    render() {

        return (
            <p>
                My address is {this.state.address} and I am {this.state.age} years old
            </p>

        );
    }
}
export default MyComponents;