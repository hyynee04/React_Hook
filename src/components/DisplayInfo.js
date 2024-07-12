import React from "react";

class DisplayInfo extends React.Component {
    render() {

        const { listFriends } = this.props;
        console.log(listFriends)
        return (
            <>
                {listFriends.map((friend) => {
                    return (
                        <div key={friend.id}> 
                            <div>Friend {friend.id}: {friend.name}</div>
                            <div>Age {friend.age}</div>
                            <br />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default DisplayInfo;