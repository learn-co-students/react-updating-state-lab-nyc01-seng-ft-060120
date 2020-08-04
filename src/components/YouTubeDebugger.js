import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

  this.state = {
    errors: [],
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
    user: null
  };
  
}

handleClick =()=> {
  this.setState({
    settings: {
      ...this.state.settings,
      bitrate: 12
    }
  })
}

handleRes = () => {
  this.setState({
    settings: {
      ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution: '720p'
      }
    }
  })
}

render() {
  return (
    <div>
    <button onClick={this.handleClick}className='bitrate'>{this.state.settings.bitrate}</button>
      <button onClick={this.handleRes}className='resolution'>{this.state.settings.video.resolution}</button>
    </div>
  )
}
}

export default YouTubeDebugger;
