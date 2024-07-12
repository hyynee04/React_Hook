import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: '',
        age: ''
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
        this.props.handleAddNewFriend({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return(
            <>
                Name: {this.state.name} - Age: {this.state.age} <br />
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

export default AddUserInfo