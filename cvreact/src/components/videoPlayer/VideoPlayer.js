import React, { Component } from 'react'
import './VideoPlayer.css'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoState: true,
            fullScreen: false,
        }
    }


    playVideo() {
        this.video.play()
        this.setState({
            videoState: !this.state.videoState
        })

    }

    pauseVideo() {
        this.video.pause()
        this.setState({
            videoState: !this.state.videoState
        })
    }

    fullScreen() {
        let el = this.video
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }

    }

    render() {
        return (
            <div className="video-container">
                <video
                    ref={(ref) => this.video = ref}
                    
                    className={this.props.type !== "horizontal" ? "videoPlay" : "videoPlayHorizontal"}
                    src={this.props.src}
                    crossOrigin="anonymous"
                    muted
                    controls
                    disablePictureInPicture
                    controlsList="nodownload"
                />
            </div>
        )
    }
}
