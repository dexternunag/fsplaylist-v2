import React, { Component } from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Spring, animated } from 'react-spring'

import { search } from '../services/youtube'
import database from '../services/firebase'

import Controls from '../components/Controls'
import SearchFeed from '../components/SearchFeed'
import SearchBar from '../components/SearchBar'
import QueueList from '../components/QueueList'

const HomeDiv = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100vh;
`

export default class Home extends Component {
  state = {
    toggleQueueList: false,
    prevPageToken: '', 
    nextPageToken: '', 
    floor: localStorage.getItem('floorNumber') === '2' ? 'second' : 'third',
    hasData: false,
    data: [],
    // 
    hasQueued: false,
    items: [],
    hasAdmin: false,
    isPlaying: false,
    hasTitle: true,
    progress: 0,
    volume: 0
  }

  componentWillMount() {
    this.controlsRef = React.createRef()
  }

  componentDidMount() {
    if (!localStorage.getItem('floorNumber')) return window.location = '/floor';

    this.loadPlaylist()
  }

  componentWillUnmount() {
    // localStorage.clear();
  }

  loadPlaylist = async () => {
    database.child(this.state.floor).on('value', snapshot => {
      // console.log(snapshot.val())
      this.setState({...snapshot.val()})
    })
  }

  handleSearch = async (query) => {
    this.setState({hasData: false, hasQueued: false, data: []})
    const { prevPageToken, nextPageToken, items: data } = await search(query)

    this.setState({prevPageToken, nextPageToken, data, hasData: true, query})
  }

  handleViewQueueList = () => this.setState({toggleQueueList: !this.state.toggleQueueList, hasTitle: !this.state.hasTitle});

  render() {
    const { toggleQueueList, items, hasQueued } = this.state

    return (
      <HomeDiv>
        <Spring
          native
          delay={350}
          from={{ opacity: 0 }}
          to={{ opacity: 1}}
        >
          {
            ({ opacity }) => (
              <animated.div style={{ opacity }} >
                <SearchBar hasAdmin={this.state.hasAdmin} handleSearch={this.handleSearch} />
              </animated.div>
            )
          }
        </Spring>
        {/* <QueueList  /> */}

        <Spring
          native
          delay={350}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {
            ({ opacity }) => (
              <animated.div style={{ opacity }}>
                <SearchFeed 
                  query={this.state.query}
                  hasData={this.state.hasData}
                  data={this.state.data}
                  items={items}
                  hasQueued={hasQueued}
                  prevPageToken={this.state.prevPageToken}
                  nextPageToken={this.state.nextPageToken}
                />
              </animated.div>
            )
          }
        </Spring>
        
        <QueueList 
          items={items}
          volume={this.state.volume}
          isPlaying={this.state.isPlaying}
          progress={this.state.progress}
          isSeeking={this.state.isSeeking}
          // controls={this.controlsRef.current.state}
          handleViewQueueList={() => this.handleViewQueueList} display={toggleQueueList ? 'show' : ''} 
        />  

        <MediaQuery maxDeviceWidth={425}>
          {(matches) => (
            <Spring
              native
              from={{ height: 0 }}
              to={{ height: matches ? 90 : 79.25 }}
            >
              { 
                ({height}) => (
                  <animated.div style={{ height }}>
                    <Controls 
                      ref={this.controlsRef} 
                      items={items}
                      playedTime={this.state.playedTime}
                      trackDuration={this.state.currentTrackDuration}
                      handleViewQueueList={this.handleViewQueueList.bind(this)} 
                      volume={this.state.volume}
                      isPlaying={this.state.isPlaying}
                      progress={this.state.progress}
                      hasTitle={this.state.hasTitle}
                    /> 
                  </animated.div>
                )
              }
            </Spring>
          )}
        </MediaQuery>

      </HomeDiv>
    )
  }
}
