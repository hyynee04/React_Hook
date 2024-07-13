import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss"
import logo from './../logo.svg'

//Statefull
// class DisplayInfo extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         isShow: true
//     //     }
//     // }
//     render() {
//         const { listFriends } = this.props;
//         //template
//         return (
//             <div className="display-infor-container">
//                 {/* <img src={logo}/> */}
//                 {true &&
//                     <div>
//                         {listFriends.map((friend) => {
//                             return (
//                                 <div key={friend.id}>
//                                     <div>
//                                         <div>Friend ({friend.id}): {friend.name}</div>
//                                         <div className={+friend.age > 25 ? "green" : "red"}>Age: {friend.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteFriend(friend.id)}>Delete</button>
//                                     </div>
//                                     <hr></hr>
//                                 </div>
//                             )

//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }


//Stateless
const DisplayInfo = (props) => {
    const { listFriends } = props;
    const [isShown, setShowHide] = useState(true)

    const handleShowHide = () => {
        setShowHide(!isShown)
    }

    console.log(">>> Call me render")

    useEffect(() => {
        setTimeout(() => {
            document.title = "Dylan"
        }, 3000)
        console.log(">>> Call me useEffect")
    })

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHide()}>{isShown === true ? "Hide" : "Show"} list friends</span>
            </div>
            {isShown &&
                <div>
                    {listFriends.map((friend) => {
                        return (
                            <div key={friend.id}>
                                <div>
                                    <div>Friend ({friend.id}): {friend.name}</div>
                                    <div className={+friend.age > 25 ? "green" : "red"}>Age: {friend.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteFriend(friend.id)}>Delete</button>
                                </div>
                                <hr></hr>
                            </div>
                        )

                    })}
                </div>
            }
        </div>
    )
}



export default DisplayInfo;