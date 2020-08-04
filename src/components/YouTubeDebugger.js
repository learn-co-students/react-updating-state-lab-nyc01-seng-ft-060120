import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor(props) {
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

    bitrateFn = () => {
        this.setState({
            settings: {
                bitrate: 12,
                video: {...this.state.settings.video}
            }
        })
    }

    resolutionFn = () => {
        this.setState({
            settings: {
                bitrate: this.state.settings.bitrate,
                video: {resolution: '720p'}
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.bitrateFn} className='bitrate'>bitrate</button>
                <button onClick={this.resolutionFn} className='resolution'>resoultion</button>
            </div>
        )
    }
}