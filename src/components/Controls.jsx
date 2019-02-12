import React, { Component } from 'react'
// import Progress from 'react-progressbar'
import Slider from 'rc-slider'
import { Spring } from 'react-spring'
import 'rc-slider/assets/index.css'

import database from '../services/firebase'

import { 
  PlayerControls, 
  Controllers, 
  PlaybackControls, 
  PlayButton, 
  NextButton,
  SeekbarDiv,
  VolumeDiv, 
  VolumeRocker,
  QueueButton
} from '../styled-components/controller'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute, faPlay, faPause, faStepForward, faList } from '@fortawesome/free-solid-svg-icons'

import '../stylesheets/progressbar.css'
import '../stylesheets/slider.css'



class Controls extends Component {
  state = {
    floor: localStorage.getItem('floorNumber') === '2' ? 'second' : 'third',
    isPlaying: false,
    progress: 80,
    volume: 80,
    items: [],
    currentTrackTitle: ''
  }

  componentDidMount() {
  }

  componentWillReceiveProps({ volume, progress, isPlaying, items, playedTime, trackDuration }) {
    this.setState({
      playedTime,
      trackDuration,
      volume, 
      progress, 
      isPlaying, 
      currentTrackTitle: items.length !== 0 ? items[0].title : null
    })
  }

  toggleVolume = async () => {
    const volume = this.state.volume === 0 ? 50 : 0
    this.setState({volume})
    await database.child(this.state.floor).update({volume})
  }

  handleVolume = async (volume) => {
    this.setState({volume})
    await database.child(this.state.floor).update({volume})
  }

  handlePlay = async () => {
    this.setState({isPlaying: !this.state.isPlaying})
    await database.child(this.state.floor).update({isPlaying: !this.state.isPlaying})
  }

  handleSeekbarChange = async (progress) => {
    // this.setState({progress})
    await database.child(this.state.floor).update({progress, isPlaying: false, isSeeking: true})
  }

  handleNext = async () => {
    const { items } = this.props
    items.splice(0, 1)
    await database.child(this.state.floor).update({items, isPlaying: true, progress: 0})
  }

  render() {
    const { progress, volume, isPlaying, currentTrackTitle, playedTime, trackDuration } = this.state;
    return (
      <PlayerControls>
        {/* <Progress completed={100} /> */}
        <Controllers>
          <PlaybackControls>
            {/* Play/Pause Button */}
            <PlayButton onClick={this.handlePlay}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} title={isPlaying ? "Pause" : "Play"} />
            </PlayButton>
            {/* Next Button */}
            <NextButton onClick={this.handleNext}>
              <FontAwesomeIcon icon={faStepForward} title="Next"/>
            </NextButton>
          </PlaybackControls>

          <SeekbarDiv>
            <span className="seeked-time">{playedTime}</span>
            <span className="slider-holder">
              <p className="track-title">{currentTrackTitle}</p>
              <Slider 
                min={0} 
                max={100} 
                defaultValue={progress}
                value={progress}
                onAfterChange={this.handleSeekbarChange}
                onChange={this.handleSeekbarChange} />
            </span>
            <span className="total-time">{trackDuration}</span>
          </SeekbarDiv>
          {/* Volume Slider */}
          <VolumeDiv>
            <FontAwesomeIcon 
              icon={this.state.volume === 0 ? faVolumeMute : faVolumeUp} 
              onClick={this.toggleVolume}
              onMouseEnter={() => this.setState({rockerDisplay: 'block'})}
              onMouseLeave={() => this.setState({rockerDisplay: 'none'})}
              title="Volume"
            />
            <QueueButton>
              <FontAwesomeIcon 
                onClick={() => this.props.handleViewQueueList()}
                icon={faList} 
                title="Queue" />
            </QueueButton>
            <Spring
              from={{ display: this.state.rockerDisplay }}
              to={{ display: this.state.rockerDisplay }}
            >
              {
                props => <VolumeRocker 
                          onMouseEnter={() => this.setState({rockerDisplay: 'block'})}
                          onMouseLeave={() => this.setState({rockerDisplay: 'none'})}
                          style={props} className="volume-rocker">
                          <Slider 
                            min={0} 
                            max={100} 
                            defaultValue={volume}
                            value={volume}
                            onAfterChange={this.handleVolume}
                            onChange={this.handleVolume}
                          />
                        </VolumeRocker>
              }
            </Spring>
          </VolumeDiv>
        </Controllers>
      </PlayerControls>
    )
  }
}

export default Controls;
