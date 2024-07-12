import React from "react";
import "./DisplayInfo.scss"
import logo from './../logo.svg'

class DisplayInfo extends React.Component {
    state = {
        isShow: true
    }

    handleOnClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const { listFriends } = this.props;
        console.log(listFriends)
        return (
            <div className="display-infor-container">
                <img src={logo}/>
                <div>
                    <span
                        onClick={() => this.handleOnClick()}
                    >{ this.state.isShow === true ? 'Hide' : 'Show'} list Friends</span>
                </div>
                { this.state.isShow && 
                <div>
                    {listFriends.map((friend) => {
                        return (
                            <div key={friend.id}>
                                <div>Friend ({friend.id}): {friend.name}</div>
                                <div className={+friend.age > 25 ? "green" : "red"}>Age: {friend.age}</div>
                                <hr />
                            </div>
                        )

                    })}
                </div>
                }
            </div>
        )
    }
}

export default DisplayInfo;