import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPlusCircle, faListUl, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
// import Skeleton from 'react-skeleton-loader'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { search } from '../services/youtube'
import database from '../services/firebase'

import { 
  SearchFeedDiv, 
  Feed, 
  FeedHeader, 
  FeedTitle, 
  FeedItems,
  FeedPagination, 
  FeedFooter 
} from '../styled-components/search-feed'

class QueueList extends Component {
  state = {
    data: [], // searched items
    items: [], // queued items
    // hasData: false,
    query: '',
    prevPageToken: '',
    nextPageToken: '',
    floor: localStorage.getItem('floorNumber') === '2' ? 'second' : 'third',
    page: 1
  }

  componentDidMount() {
    setTimeout(() => {
      this.initMusicFeed()
    }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    const { query, hasData, data, nextPageToken, prevPageToken, items, hasQueued } = nextProps
    
    if (hasQueued) return this.setState({items})
    // if (!hasData) return this.setState({hasData})

    this.setState({
      query,
      hasData,
      data,
      prevPageToken,
      nextPageToken
    })
  }

  initMusicFeed = async () => {
    const { prevPageToken, nextPageToken, items: data } = await search()
    this.setState({data, hasData: true, prevPageToken, nextPageToken})
  }

  toggleSearch = async (pageToken) => {
    this.setState({data: [], hasData: false})
    const { prevPageToken, nextPageToken, items: data } = await search(this.state.query, pageToken)
    this.setState({data, hasData: true, prevPageToken, nextPageToken})
  }

  addToQueue = async (item) => {
    const { items } = this.props
    items.push(item)
    await database.child(this.state.floor).update({items, hasQueued: true })
  }

  addToNext = async (item) => {
    let { items } = this.state

    const x = [items[0], item]
    const y = items.splice(1)
    items = [ ...x, ...y ]
    
    await database.child(this.state.floor).update({items, hasQueued: true})
  }

  render() {
    let { data, hasData, page, prevPageToken, nextPageToken } = this.state
    let searchFeedResults;

    if (!hasData) {
      searchFeedResults = (Array.from(Array(24), (e, i) => 
        <SkeletonTheme key={i} className="skeleton" color="#303030" highlightColor="#282828">
          <div className="skeleton-image">
            <Skeleton height="163.3px" width="249px" duration={1.5} />
          </div>
          <div className="skeleton-text">
            <Skeleton height="12px" width="180px" duration={1.5} />
            {/* <Skeleton height="12px" width="100px" duration={1.5} /> */}
          </div>
        </SkeletonTheme>
      ))
    } else {
      searchFeedResults = data.map(({ id, thumbnail, title}, i) => (
        <div className="feed-item" key={i}>
          <div className="feed-image-holder">
            <img className="feed-image" src={thumbnail} alt={title} />
            <div className="feed-item-actions">
              <FontAwesomeIcon 
                onClick={() => this.addToQueue({id, thumbnail, title})}
                className="feed-item-action" icon={faPlus} title="Add to Queue" />
              <span 
                onClick={() => this.addToNext({id, thumbnail, title})}
                className="feed-item-action--addtonext-holder" title="Add to Next">
                <FontAwesomeIcon className="feed-item-action--addtonext" icon={faArrowRight} />
                <FontAwesomeIcon className="feed-item-action--addtonext" icon={faListUl} />
              </span>
              {/* <span className="feed-item-action" onClick={() => this.addToQueue({id, thumbnail, title})}>Add to queue</span>
              <span className="feed-item-action--divider">||</span>
              <span className="feed-item-action" onClick={() => this.addToNext({id, thumbnail, title})}>Add to next</span> */}
            </div>
          </div>
          <div className="feed-text">
            <span className="feed-title">{title}</span>
          </div>
        </div>
      ))
    }
     
    return (
      <SearchFeedDiv>
        <Feed>
          <FeedHeader>
            <FeedTitle>Music Feed</FeedTitle>
            <FeedPagination>
              {
                page !== 1 && 
                <span className="feed-prev"onClick={() => {
                  this.setState({page: --page})
                  this.toggleSearch(prevPageToken)
                }}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                  {" "}
                  Back
                </span>
              }
              <span className="feed-next" onClick={() => {
                this.setState({page: ++page})
                this.toggleSearch(nextPageToken)
              }}>
                Next
                {" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </FeedPagination>
          </FeedHeader>
          <FeedItems>
            {searchFeedResults}
          </FeedItems>
          <FeedFooter>
            <FeedPagination>
              {
                page !== 1 && 
                <span className="feed-prev"onClick={() => {
                  this.setState({page: --page})
                  this.toggleSearch(prevPageToken)
                }}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                  {" "}
                  Back
                </span>
              }
              <span className="feed-next" onClick={() => {
                this.setState({page: ++page})
                this.toggleSearch(nextPageToken)
              }}>
                Next
                {" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </FeedPagination>
          </FeedFooter>
        </Feed>
      </SearchFeedDiv>
    )
  }
}

export default QueueList;