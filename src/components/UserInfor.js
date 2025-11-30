import React from 'react';
class UserInfor extends React.Component {

    state = {
        name: "Phuong",
        age: 26,
        address: "Can Tho"
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {

        return (
            <div>
                My address is {this.state.address} and I am {this.state.age} years old, my name is {this.state.name}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)} />
                    <label>Your age: </label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;