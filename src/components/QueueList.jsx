import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import QueueOptions from './QueueOptions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAngleDown, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Playlist, ListItems, ListItem, ListHeader, ListTitle, ListHeaderText } from '../styled-components/queue-list'

import database from '../services/firebase'

class QueueList extends Component {
  state = {
    floor: localStorage.getItem('floorNumber') === '2' ? 'second' : 'third',
    hasAdmin: localStorage.getItem('hasAdmin') ? true : false,
    items: [],
    url: 'https://www.youtube.com/watch?v=ZpUxgAXCK2E',
    volume: 80,
    progress: 0,
    isPlaying: false,
    firstLoad: true
  }

  componentDidMount() {
    this.playerRef = React.createRef()
  }
  
  async componentWillReceiveProps({ items, volume, progress, isPlaying, isSeeking }) {
    this.setState({
      items, 
      volume, 
      progress, 
      isPlaying,
      url: items.length !== 0 ? `https://www.youtube.com/watch?v=${items[0].id}` : this.state.url,
      isAdmin: localStorage.getItem('isAdmin') ? true : false
    })

    
    // if (isSeeking) {
    //   this.playerRef.current.seekTo(progress / 100);
    //   await database.child(this.state.floor).update({isPlaying: true, isSeeking: false})
    // }
  }

  // onPlay = async (index) => {
  //   const { items } = this.state
  //   this.setState({url: `https://www.youtube.com/watch?v=${items[index].id}`})
  //   items.splice(0, 0, items.splice(index, 1)[0])
  //   await database.child(this.state.floor).update({ items })
  // }
  
  onQueueNext = async (index) => {
    const { items } = this.state
    items.splice(1, 0, items.splice(index, 1)[0])
    await database.child(this.state.floor).update({items})
  }

  onRemove = async (index) => {
    const { items } = this.state
    items.splice(index, 1)
    await database.child(this.state.floor).update({items})
  }

  onPlayerDuration = () => {
    // console.log(data)
  }

  onPlayerStart = async () => {
    await database.child(this.state.floor).update({isPlaying: true})
  }

  onPlayerPause = async () => {
    await database.child(this.state.floor).update({isPlaying: false})
  }

  onPlayerEnded = async () => {
    const { items } = this.state
    items.splice(0, 1)
    this.setState({isPlaying: false})
    await database.child(this.state.floor).update({items, isPlaying: true})
  }

  onPlayerProgress = async ({ played }) => {
    const progress = played * 100
    await database.child(this.state.floor).update({progress})
  }



  render() {
    const { items } = this.state

    let playlistContent;

    if (items.length === 0) {
      playlistContent = (
        <ListItem>
          Empty List
        </ListItem>
      )
    } else {
      playlistContent = items.map(({ title }, i) => (
        <ListItem key={i}>
            {title}
            <span>
              {/* <span className="text">
                <FontAwesomeIcon icon={faPlay} onClick={() => this.onPlay(i)}/>
              </span> */}
              {
                i > 0 
                  ? <span className="text next" onClick={() => this.onQueueNext(i)}>Queue Next</span>
                  : <span className="text now">Current Track</span>
              }
              <FontAwesomeIcon icon={faTimes} onClick={() => this.onRemove(i)}/>
            </span>
          </ListItem>
      ))
    }

    return (
      <Playlist className={this.props.display}>
        <FontAwesomeIcon 
          className="queue-close"
          onClick={this.props.handleViewQueueList()}
          icon={faAngleDown} 
          title="Hide Queue"
        />

        <ListHeader>
          <ListTitle>Queue</ListTitle>
          <ListHeaderText>{items.length} tracks</ListHeaderText>
          {/* <ListHeaderText>2 hrs 5 mins</ListHeaderText> */}
        </ListHeader>

        <ListItems>
          
          {
            this.state.isAdmin &&
            <ListItem>
              <ReactPlayer
                ref={this.playerRef}
                url={this.state.url}
                playing={this.state.isPlaying}
                volume={this.state.volume / 100}
                progress={this.state.progress}

                onDuration={this.onPlayerDuration}
                onPlay={this.onPlayerStart}
                onPause={this.onPlayerPause}
                onEnded={this.onPlayerEnded}
                onProgress={this.onPlayerProgress}

                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  },
                  facebook: {
                    appId: '12345'
                  }
                }}
                width="100%"
              />
            </ListItem>
          }

          <ListItem>
            <div className="list-header">Title</div>
          </ListItem>

          {playlistContent}
          
          {/* <ListItem>
            Test Item
            <span>
              <span className="text">
              Youtube
              </span>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </ListItem> */}

        </ListItems>
      </Playlist>
    )
  }
}

export default QueueList;