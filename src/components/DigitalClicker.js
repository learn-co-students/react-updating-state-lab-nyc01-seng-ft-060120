import React from 'react'

class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    clickButton =() => {
        let num = this.state.timesClicked
        this.setState({ timesClicked: num + 1})
    }

    render(){
        return(
            <div>
                <h1>digital clicker</h1>
                <button onClick={this.clickButton}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
