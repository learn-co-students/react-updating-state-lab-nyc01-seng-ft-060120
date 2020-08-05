import React from 'react'

export default class DigitalClick extends React.Component{
  constructor(props){
    super(props)
    this.state = {timesClicked: 0}
  }

clickHandler = () => {
  let newCount = (this.state.timesClicked + 1)
  this.setState({timesClicked: newCount})
}
  

  render(){
    return(
    <button onClick={this.clickHandler}>Clicked {this.state.timesClicked} Times!</button>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
//DELIVERABLES
//------------------------------------------------------------------------------------------------------------------
    // In the components/DigitalClicker.js file, create a DigitalClicker React component.

    // This component has an initial state property called timesClicked, which is initially defined as 0.

    // The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.

    // Whenever the button is clicked, update the state by incrementing the timesClicked by 1.


//------------------------------------------------------------------------------------------------------------------
//NOTES
//------------------------------------------------------------------------------------------------------------------
// we must use the className attribute, rather than class. Using class will cause an error while testing. Classes are used in this lab to make testing your solution a little easier.
