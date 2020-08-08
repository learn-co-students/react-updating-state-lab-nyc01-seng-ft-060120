import React from 'react'

class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
          }
        }
      }

      clickBitRate = () => {
          return this.setState({settings: {...this.state.settings, bitrate: 12}})
      }

      resClick = () => {
          return this.setState({settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}})
      }

    render(){
        return(
            <div>
                <h1>youtube</h1>
                <button onClick={this.clickBitRate} className='bitrate'>BitRate</button>
                <button onClick={this.resClick} className='resolution'>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger
