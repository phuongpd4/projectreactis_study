import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Phuong", age: "16" },
            { id: 2, name: "Giang", age: "26" },
            { id: 3, name: "Nam", age: "27" }
        ]
    }
    /// JSX
    render() {


        return (
            <div>
                <UserInfor />
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}
export default MyComponents;