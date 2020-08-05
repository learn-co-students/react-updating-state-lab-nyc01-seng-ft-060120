import React from 'react'

export default class YouTubeDebugger extends React.Component{

  
  render(){
    return(
          <h1>Hello World</h1>

    )
  }
}

//------------------------------------------------------------------------------------------------------------------
//DELIVERABLES
//------------------------------------------------------------------------------------------------------------------

    // {/*<YouTubeDebugger />*/} uncommment before you begin building this component!

    // In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.

// This component has several state properties. The initial state shape looks like this:
// {
//   errors: [],
//   user: null,
//   settings: {
//     bitrate: 8,
//     video: {
//       resolution: '1080p'
//     }
//   }
// }

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.

//------------------------------------------------------------------------------------------------------------------
//NOTES
//------------------------------------------------------------------------------------------------------------------
// we must use the className attribute, rather than class. Using class will cause an error while testing. Classes are used in this lab to make testing your solution a little easier.
