import styled from 'styled-components'

export const SearchFeedDiv = styled.div`
  padding: 0 5%;
`

export const Feed = styled.div`
  display: flex;
  flex-flow: wrap;
  height: calc(80vh - 77px);
  overflow: scroll;
  overflow-x: hidden;

  .css-rk5brx {
    display: flex;
    flex-flow: column;
    margin-right: 10px;
    margin-bottom: 10px;

    .skeleton-image {
      margin-bottom: 5px;
    }
    .skeleton-text {
      display: flex;
      flex-flow: column;
    }

    .css-19bon8n {
      border-radius: 2px;
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }

  // /* Track */
  // ::-webkit-scrollbar-track {
  //   background: #f1f1f1; 
  // }

  // /* Handle */
  // ::-webkit-scrollbar-thumb {
  //   background: #888; 
  // }

  // /* Handle on hover */
  // ::-webkit-scrollbar-thumb:hover {
  //   background: #555; 
  // }
`

export const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-right: 40px;
  width: 100%;
`

export const FeedTitle = styled.h2`
  color: #ecf0f1;
`

export const FeedItems = styled.div`
  display: flex;
  flex-flow: wrap;

  color: #fff;

  .feed-item {
    display: flex;
    flex-flow: column;
    padding-bottom: 10px;
    padding-right: 10px;

    width: 100%;
    max-width: 290px;
    transition: all 150ms ease-in-out;

    @media screen and (min-width: 1440px) {
      max-width: 249px;
    }

    &:hover {
      // transform: scale(1.1);
      // background-color: #141414;
      .feed-image {
        filter: blur(3px);
      }

      .feed-image-holder .feed-item-actions {
        bottom: 0;
      }
    }

    .feed-image-holder {
      position: relative;
      width: 100%;
      height: auto;
      overflow: hidden;

      .feed-image {
        width: 100%;
        min-width: 80px;
        height: auto;

        transition: all 150ms ease-in-out;
      }

      .feed-item-actions {
        position: absolute;
        bottom: -50px;

        display: flex;
        flex-flow: row;
        
        padding: 10px 15px;
        width: 100%;

        transition: all 300ms ease-in-out;

        .feed-item-action {
          margin-right: 8px;
          padding: 10px 12px;
          background-color: #181818;
          border-radius: 100%;
  
          cursor: pointer;
          transition: all 150ms ease-in-out;
  
          &:hover {
            color: #ff3f34;
          }
        }

        .feed-item-action--addtonext-holder {
          padding: 10px 12px;
          background-color: #181818;
          border-radius: 100%;
          position: relative;
          width: 14px;

          cursor: pointer;
          transition: all 150ms ease-in-out;
  
          &:hover {
            color: #ff3f34;
          }

          .feed-item-action--addtonext:first-child {
            position: absolute;
            left: 7px;
            bottom: 9px;
            font-size: 7px;
            background-color: #181818;
            z-index: 9999;
            padding-right: 1px;
          }

          .feed-item-action--addtonext:last-child {
            position: absolute;
            right: 11px;
            font-size: 16px;
            top: 10px;
          }
        }

        .feed-item-action--divider {
          display: block;
          padding-left: 5px;
          
          text-transform: uppercase;
          font-size: 11px;
          color: #5a5a5a;
        }
      }
    }

    .feed-text {
      position: relative;

      .feed-title {
        display: block;

        padding: 8px 0 15px;
        width: 80%;

        font-size: 13px;

        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }

    }
  }
`

export const FeedPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 120px;
  
  font-size: 10px;
  text-transform: uppercase;
  color: #ecf0f1;

  .feed-prev,
  .feed-next {
    display: flex;
    align-items: center;
    margin-left: 25px;
    cursor: pointer;
    transition: all 150ms ease-in-out;

    &:hover {
      color: #ff3f34;
    }
  }

  .feed-prev {
    svg {
      margin-right: 3px;
    }
  }

  .feed-next {
    svg {
      margin-left: 3px;
    }
  }
`

export const FeedFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: top;
  padding-right: 35px;
  width: 100%;
`

