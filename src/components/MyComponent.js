import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Ha My',
        ig: '_emm.myy_',
        age: 27
    }

    //JSX
    render() {
        return(
            <div>
                Name: {this.state.name} - Instagram: {this.state.ig} - Age: {this.state.age}
            </div>
        )
    }

}

export default MyComponent;