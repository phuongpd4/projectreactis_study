import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component {

    /// JSX
    render() {

        const myInfor = ["a", "b", "c"];
        return (
            <div>
                <UserInfor />
                <DisplayInfor name="Phuong" age="30" />
                <DisplayInfor name="Phuong" age={26} myInfor={myInfor} />
            </div>
        );
    }
}
export default MyComponents;