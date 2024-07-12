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

    //JSX
    render() {
        return(
            <div>
                Name: {this.state.name} - Instagram: {this.state.ig} - Age: {this.state.age} <br/>
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        )
    }

}

export default MyComponent;