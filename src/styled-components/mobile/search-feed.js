import styled from 'styled-components'

export const MobileSearchFeedDiv = styled.div`
  // padding: 0 5%;
`

export const MobileFeed = styled.div`
  display: flex;
  flex-flow: wrap;
  height: calc(80vh - 77px);
  overflow: scroll;
  overflow-x: hidden;
  padding: 0 5%;

  .css-rk5brx {
    display: flex;
    flex-flow: wrap;
    // margin-right: 10px;
    margin-bottom: 10px;

    .skeleton-image {
      margin-bottom: 5px;
      margin-right: 10px
    }
    .skeleton-text {
      display: flex;
      flex-flow: column;

      span {
        margin-bottom: 5px;
      }
    }

    .css-19bon8n {
      border-radius: 2px;
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }
`

export const MobileFeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  // padding-right: 15px;
  width: 100%;
`

export const MobileFeedTitle = styled.h2`
  color: #ecf0f1;
`

export const MobileFeedItems = styled.div`
  display: flex;
  flex-flow: column;

  color: #fff;

  .feed-item {
    display: flex;
    height: 100px;
    font-size: 12px;

    .feed-image-holder {
      margin-right: 15px;
      width: 100px;

      .feed-image {
        width: inherit;
      }
    }

    .feed-item-actions {
      width: 100%;
      max-width: 270px;

      .feed-title {
        display: block;
        width: 270px;
        margin-bottom: 15px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .actions-holder {
        display: flex;

        .feed-item-action--addtoqueue-holder {
          position: relative;
          margin-right: 20px;

          svg {
            font-size: 8px;
          }

          .feed-item-action--addtoqueue:first-child {
            position: absolute;
            left: 0;
            top: 3px;
          }

          span {
            padding-left: 12px;
          }
        }

        .feed-item-action--addtonext-holder {
          position: relative;

          svg {
            font-size: 8px;
          }

          .feed-item-action--addtonext:first-child {
            position: absolute;
            left: -1px;
            bottom: 3px;
            font-size: 5px;
            background-color: #181818;
            z-index: 1;
            padding-right: 1px;
          }

          .feed-item-action--addtonext:nth-child(2) {
            position: absolute;
            left: 0;
            top: 3px;
          }

          span {
            padding-left: 12px;
          }
        }
      }
    }
  }

  // .feed-item {
  //   display: flex;
  //   flex-flow: column;
  //   padding-bottom: 10px;
  //   // padding-right: 10px;

  //   width: 100%;
  //   max-width: 235px;
  //   transition: all 150ms ease-in-out;

  //   @media screen and (min-width: 1440px) {
  //     // max-width: 235px;

  //     .feed-image-holder {
  //       height: 215px;
  //     }
  //   }

  //   &:hover {
  //     // transform: scale(1.1);
  //     // background-color: #141414;
  //     .feed-image {
  //       filter: blur(3px);
  //     }

  //     .feed-image-holder .feed-item-actions {
  //       bottom: 0;
  //     }
  //   }

  //   .feed-image-holder {
  //     position: relative;
  //     width: 100%;
  //     height: 200px;
  //     overflow: hidden;

  //     border-radius: 3px;
  //     box-shadow: 0 1px 6px rgb(0, 0, 0);

  //     .feed-image {
  //       position: absolute;
  //       left: 50%;
  //       top: 50%;
  //       height: 100%;
  //       width: auto;
  //       -webkit-transform: translate(-50%,-50%);
  //           -ms-transform: translate(-50%,-50%);
  //               transform: translate(-50%,-50%);

  //       transition: all 150ms ease-in-out;
  //     }

  //     .feed-item-actions {
  //       position: absolute;
  //       bottom: -50px;

  //       display: flex;
  //       flex-flow: row;
        
  //       padding: 10px 15px;
  //       width: 100%;

  //       transition: all 300ms ease-in-out;

  //       .feed-item-action {
  //         margin-right: 8px;
  //         padding: 10px 12px;
  //         background-color: #181818;
  //         border-radius: 100%;
  
  //         cursor: pointer;
  //         transition: all 150ms ease-in-out;
  
  //         &:hover {
  //           color: #ff3f34;
  //         }
  //       }

  //       .feed-item-action--addtonext-holder {
  //         padding: 10px 12px;
  //         background-color: #181818;
  //         border-radius: 100%;
          // position: relative;
          // width: 14px;

  //         cursor: pointer;
  //         transition: all 150ms ease-in-out;
  
  //         &:hover {
  //           color: #ff3f34;
  //         }

          // .feed-item-action--addtonext:first-child {
          //   position: absolute;
          //   left: 7px;
          //   bottom: 9px;
          //   font-size: 7px;
          //   background-color: #181818;
          //   z-index: 9999;
          //   padding-right: 1px;
          // }

          // .feed-item-action--addtonext:last-child {
          //   position: absolute;
          //   right: 11px;
          //   font-size: 16px;
          //   top: 10px;
          // }
  //       }

  //       .feed-item-action--divider {
  //         display: block;
  //         padding-left: 5px;
          
  //         text-transform: uppercase;
  //         font-size: 11px;
  //         color: #5a5a5a;
  //       }
  //     }
  //   }

  //   .feed-text {
  //     position: relative;

  //     .feed-title {
  //       display: block;

  //       padding: 8px 0 15px;
  //       width: 80%;

  //       font-size: 13px;
  //       color: #c4c4c4;

        // white-space: nowrap; 
        // overflow: hidden;
        // text-overflow: ellipsis;
  //     }

  //   }
  }
`

export const MobileFeedPagination = styled.div`
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

export const MobileFeedFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: top;
  padding-right: 35px;
  width: 100%;
`

