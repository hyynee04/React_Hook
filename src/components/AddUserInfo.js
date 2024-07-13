import {React, useState} from "react";

/*
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
*/

const AddUserInfo = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewFriend({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }

    return (
        <>
            Name: {name} - Age: {age} <br />
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    onChange={(event) => handleOnChangeName(event)}
                    type="text"
                /><br />
                <label>Your age: </label>
                <input
                    value={age}
                    onChange={(event) => handleOnChangeAge(event)}
                    type="text"
                /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddUserInfo