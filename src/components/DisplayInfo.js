import React from "react";

class DisplayInfo extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div>
            </>
        )
    }
}

export default DisplayInfo;