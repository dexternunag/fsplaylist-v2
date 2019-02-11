import styled from 'styled-components'

export const Playlist = styled.div`
  position: absolute;
  bottom: 90px;
  height: 0;
  width: 100%;
  overflow: hidden;
  background: #141414;
  z-index: 1;

  overflow: scroll;
  overflow-x: hidden;
  overflow-y: overlay;

  transition: all 200ms ease-in-out;

 &.show {
    height: calc(100% - 90px)
 }

 .queue-close {
    position: absolute;
    top: 18px;
    right: 65px;
    // font-size: 25px;
    // color: #ecf0f1;
    // cursor: pointer;

    height: 30px;
    width: 30px !important;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: #ecf0f10f;
    }
 }
`

export const ListItems = styled.ul`
  margin: auto;
  padding: 10px 0;
  list-style: none;

  width: 70%;
  height: 100%;
  max-height: calc(100% - 82px);
  overflow: hidden;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  font-size: 14px;
  border-bottom: 1px solid #272727;
  color: #ecf0f1;

  .list-header {
    font-size: 12px;
    color: #95a5a6;

    &:last-child { padding-right: 75px; }
  }

  .text { 
    padding-right 57px; 
    font-size: 12px;
    color: #95a5a6;

    &.next {
      cursor: pointer;

      &:hover {
        color: #ff3f34;
      }
    }
  }

  svg {
    color: #656565;
  }
`

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15%;
  color: #ecf0f1;
`

export const ListTitle = styled.h5`
  margin-right: 15px
  font-weight: 500;
`

export const ListHeaderText = styled.p`
  margin-right: 15px
  font-size: 12px;
`