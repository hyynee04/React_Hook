import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listFriends: [
            { id: 1, name: 'Chandler', age: '30' },
            { id: 2, name: 'Monica', age: '25' },
            { id: 3, name: 'Rachel', age: '24' },
            { id: 4, name: 'Ross', age: '30' }
        ]
    }

    handleAddNewFriend = (friend) => {
        // let listFriendsClone = this.state.listFriends // => BAD CODE
        // listFriendsClone.push(friend)
        // this.setState({
        //     listFriends: listFriendsClone
        // }) 
        this.setState({
            listFriends: [friend, ...this.state.listFriends]
        })
    }
    //JSX
    render() {
        //DRY: Don't repeat yourself

        const test = ["Nguyen Duc Huy and something else", 1]

        return (
            <>
                {test}
                <div className="a">
                    <div>
                        <AddUserInfo
                            handleAddNewFriend={this.handleAddNewFriend}
                        />
                        <br /><br />
                        <DisplayInfo
                            listFriends={this.state.listFriends}
                        />
                    </div>
                </div>
                <div className="b"></div>
            </>


        )
    }

}

export default MyComponent;