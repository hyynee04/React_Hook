import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listFriends: [
            {id: 1, name: 'Chandler', age: '30'},
            {id: 2, name: 'Monica', age: '25'},
            {id: 3, name: 'Rachel', age: '24'},
            {id: 4, name: 'Ross', age: '30'}
        ]
    }
    //JSX
    render() {
        return (
            //DRY: Don't repeat yourself
            <div>
                <UserInfo></UserInfo>
                <br /><br />
                <DisplayInfo listFriends={this.state.listFriends} />
            </div>
        )
    }

}

export default MyComponent;