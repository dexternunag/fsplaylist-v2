import React, { Component } from 'react'
// import Progress from 'react-progressbar'
import MediaQuery from 'react-responsive'
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

import {
  MobileControllers,
  MobilePlaybackControls, 
  MobilePlayButton, 
  MobileNextButton,
  MobileSeekbarDiv,
  MobileVolumeDiv, 
  MobileVolumeRocker,
  MobileQueueButton
} from '../styled-components/mobile/controller'

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
    currentTrackTitle: '',
    hasTitle: false
  }

  componentDidMount() {
  }

  componentWillReceiveProps({ volume, progress, isPlaying, items, playedTime, trackDuration, hasTitle }) {
    this.setState({
      playedTime: items.length !== 0 ? playedTime : '',
      trackDuration: items.length !== 0 ? trackDuration : '',
      volume, 
      progress, 
      isPlaying, 
      currentTrackTitle: items.length !== 0 ? items[0].title : null,
      hasTitle: hasTitle ? items.length !== 0 ? hasTitle : false : false,
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
    const { hasTitle, progress, volume, isPlaying, currentTrackTitle, playedTime, trackDuration } = this.state;
    return (
      <PlayerControls>
        <MediaQuery maxDeviceWidth={425}>
          {(matches) => {
            if (matches) {
              return (
                <MobileControllers>
                  <MobileSeekbarDiv>
                    <div className="time-holder">
                      <span className={hasTitle ? "seeked-time has-title" : "seeked-time"}>{playedTime}</span>
                      <span className={hasTitle ? "total-time has-title" : "total-time"}>{trackDuration}</span>
                    </div>
                    <span className="slider-holder">
                      <Slider 
                        min={0} 
                        max={100} 
                        defaultValue={progress}
                        value={progress}
                        onAfterChange={this.handleSeekbarChange}
                        onChange={this.handleSeekbarChange} />
                    </span>
                    <span className="track-title">
                      <p className="title">{currentTrackTitle || ''}</p>
                    </span>
                  </MobileSeekbarDiv>
                  
                  <div className="lower-control-holder">
                    <MobilePlaybackControls>
                      <MobilePlayButton onClick={this.handlePlay}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} title={isPlaying ? "Pause" : "Play"} />
                      </MobilePlayButton>
                      <MobileNextButton onClick={this.handleNext}>
                        <FontAwesomeIcon icon={faStepForward} title="Next"/>
                      </MobileNextButton>
                    </MobilePlaybackControls>

                    <MobileVolumeDiv>
                      <FontAwesomeIcon 
                        icon={this.state.volume === 0 ? faVolumeMute : faVolumeUp}
                        onMouseEnter={() => this.setState({rockerDisplay: 'block'})}
                        onMouseLeave={() => this.setState({rockerDisplay: 'none'})}
                        title="Volume"
                      />
                      <MobileQueueButton>
                        <FontAwesomeIcon 
                          onClick={() => this.props.handleViewQueueList()}
                          icon={faList} 
                          title="Queue" />
                      </MobileQueueButton>
                      <Spring
                        from={{ display: this.state.rockerDisplay }}
                        to={{ display: this.state.rockerDisplay }}
                      >
                        {
                          props => <MobileVolumeRocker 
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
                                  </MobileVolumeRocker>
                        }
                      </Spring>
                    </MobileVolumeDiv>
                  </div>
                </MobileControllers>
              );
            } else {
              return (
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
                    <span className={hasTitle ? "seeked-time has-title" : "seeked-time"}>{playedTime}</span>
                    <span className={hasTitle ? "slider-holder has-title" : "slider-holder"}>
                      {
                        hasTitle && <p className="track-title">{currentTrackTitle}</p>
                      }
                      <Slider 
                        min={0} 
                        max={100} 
                        defaultValue={progress}
                        value={progress}
                        onAfterChange={this.handleSeekbarChange}
                        onChange={this.handleSeekbarChange} />
                    </span>
                    <span className={hasTitle ? "total-time has-title" : "total-time"}>{trackDuration}</span>
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
              )
            }
          }}
        </MediaQuery>
        {/* <Progress completed={100} /> */}
      </PlayerControls>
    )
  }
}

export default Controls;
