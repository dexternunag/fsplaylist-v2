import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
  SearchNav,
  SearhInputHolder,
  SearchInput
} from '../styled-components/search-bar'

import database from '../services/firebase'

class Search extends Component {
  state = {
    query: '',
    prevPageToken: '',
    nextPageToken: '',
    floor: localStorage.getItem('floorNumber') === '2' ? 'second' : 'third',
    isAdmin: localStorage.getItem('isAdmin') ? true : false
  }

  handleSearch = async (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.query)
  }

  onBecomeHost = async () => {
    localStorage.setItem('isAdmin', true)
    this.setState({isAdmin: true})
    await database.child(this.state.floor).update({hasAdmin: true})
  }

  onChangeRoom = async () => {
    const { isAdmin } = this.state
    localStorage.clear()
    if (isAdmin) await database.child(this.state.floor).update({
      hasAdmin: false,
      isPlaying: false,
      progress: 0
    })
    window.location = '/floor'
  }

  render() {
    const { search } = this.state

    return (
      <SearchNav>
        <SearhInputHolder>
          <form onSubmit={this.handleSearch}>
            <SearchInput 
              value={search} 
              onChange={(e) => this.setState({query: e.target.value})}
              name="query"
              type="text" 
              placeholder="Search" />
          </form>
          <div className="actions-wrapper">
            { 
              !this.props.hasAdmin &&
              <button 
                onClick={this.onBecomeHost}
              >
                Become a Host
              </button>
            }
            { this.state.isAdmin && <button className="active">You're the host</button> }
            <button onClick={this.onChangeRoom}>
              Change Room
            </button>
          </div>
        </SearhInputHolder>
      </SearchNav>
    )
  }
}

export default withRouter(Search);