// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
            </div>
        )
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    // clickHandler = () => {
    //     let newTimesClicked = this.state.timesClicked + 1
    //     this.setState({
    //         timesClicked: newTimesClicked
    //     })
    // }
}

export default DigitalClicker