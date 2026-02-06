import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Phuong", age: "16" },
            { id: 2, name: "Giang", age: "26" },
            { id: 3, name: "Nam", age: "27" }
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log("Check data from parent: ", userObj)
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }
    /// JSX
    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <DisplayInfor listUser={this.state.listUser}
                />
            </div>
        );
    }
}
export default MyComponents;