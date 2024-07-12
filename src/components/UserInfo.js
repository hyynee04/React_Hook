import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Ha My',
        ig: '_emm.myy_',
        age: 27
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return(
            <>
                Name: {this.state.name} - Instagram: {this.state.ig} - Age: {this.state.age} <br />
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                        type="text"
                    /><br />
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                        type="text"
                    /><br />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default UserInfo