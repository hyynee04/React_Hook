import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    

    //JSX
    render() {
        return (
            <div>
                <UserInfo></UserInfo>
                <br /><br />
                <DisplayInfo name='Nguyen Duc Huy' age='21' />
                <hr></hr>
                <DisplayInfo name='Phan Tran Nhat Ha' age={30} />
            </div>
        )
    }

}

export default MyComponent;