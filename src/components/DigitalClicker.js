import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(props) {
        super()
        this.state = {timesClicked: 0}
    }

    clickFn = () => {
        this.setState({timesClicked: ++this.state.timesClicked})
    }

    render() {
        return <button onClick={this.clickFn}>{this.state.timesClicked}</button>
    }
}