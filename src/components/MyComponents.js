import React from "react";
class MyComponents extends React.Component {

    state = {
        name: "Phuong",
        age: 26,
        address: "Can Tho"
    };
    handleClick(event) {
        console.log(">> Click my button ");
        console.log("My name is ", this.state.name);
        this.setState({
            name: "Tuyen"
        });
    }
    /// JSX
    render() {

        return (
            <div>
                My address is {this.state.address} and I am {this.state.age} years old, my name is {this.state.name}
                <button onClick={(event) => { this.handleClick(event) }} >Click me</button>
            </div>

        );
    }
}
export default MyComponents;