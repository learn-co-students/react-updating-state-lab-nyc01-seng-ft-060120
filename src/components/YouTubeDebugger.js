// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    resoHandler = () => {
        this.setState({settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}})
    }

    bitRateHandler = () => {
        this.setState({settings: {...this.state.settings, bitrate: 12}})
    }


    render() {
        return(<div>
            <button className="bitrate" onClick={this.bitRateHandler}>Bit-Rate</button>
            <button className="resolution" onClick={this.resoHandler}>resolution</button>
        </div>)
    }
}