import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Ha My',
        ig: '_emm.myy_',
        age: 27
    }

    handleClick = (event) => {
        console.log(`Name: `, this.state.name)
        console.log(event)

        this.setState({
            name: 'Dylan',
            age: Math.floor(Math.random() * 100)
        })
    }

    handleOnMouseOver = (event) => {
        console.log(event.pageX)
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    //JSX
    render() {
        return (
            <div>
                Name: {this.state.name} - Instagram: {this.state.ig} - Age: {this.state.age} <br />
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        value={this.state.name}
                        onChange={(event) => this.handleOnChange(event)}
                        type="text"
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default MyComponent;