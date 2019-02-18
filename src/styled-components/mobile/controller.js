import styled from 'styled-components';

export const MobileControllers = styled.div`
  position: relative;
  padding: 10px 0;

  height: 100%;

  background-color: #181818;
  box-shadow: 0 -1px 12px 0 rgba(0, 0, 0, 0.37);    box-shadow: 0 -1px 12px 0 rgba(0, 0, 0, 0.37);

  .lower-control-holder {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 6%;
  }
`

/**
 * Playback Elements
 */
export const MobilePlaybackControls = styled.div`
  display: flex;
  align-items: center;
`

export const MobilePlayButton = styled.div`
  text-align:center;
  margin-right: 15px;
  width: 80%;
  font-size: 30px;
  color: #E0E0E0;

  svg {
    padding: 15px;
    height: 25px;
    width: 25px !important;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const MobileNextButton = styled.div`
  width: 80%;
  color: #E0E0E0;

  svg {
    padding: 8px;
    height: 15px;
    width: 15px !important;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`

/**
 * Seekbar Elements
 */
export const MobileSeekbarDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  .time-holder {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }

  .slider-holder {
    display: block;
    position: absolute;
    bottom: -9px;
    left: 0;
    right: 0;

    padding-top: 2px;
    width: 100%;

    .rc-slider {
      width: 100%;

      .rc-slider-track {
        border-radius: 0px;
      }
  
      .rc-slider-rail,
      .rc-slider-track,
      .rc-slider-step {
        height: 3px;
        transition: all 80ms ease-in-out;
      }
  
      .rc-slider-handle {
        margin-top: 1px;
        width: 0px;
        height: 0px;
        transition: all 100ms ease-in-out;
      }
  
      &:hover {
        .rc-slider-rail,
        .rc-slider-track,
        .rc-slider-step {
          height: 5px;
        }
  
        .rc-slider-handle { 
          margin-top: -3px;
          width: 10px;
          height: 10px;
         }
      }
    }
  }

  .track-title {
    display: block;
    position: absolute;
    text-align: center;
    padding: 15px 0;
    width: 100%;
    font-size: 14px;

    .title {
      margin: 0 auto;
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  
  span {
    font-size: 10px;
    color: #9E9E9E;
  }
`

export const MobileVolumeDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    padding: 10px;
    height: 12px;
    width: 12px !important;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const MobileVolumeRocker = styled.div`
  z-index: 99;
  position: absolute;
  top: -105px;
  left: -69px;
  width: 130px;
  padding: 10px 20px;
  background-color: #202020;
  border-radius: 3px;
  margin-bottom: 15px;
  transform: rotate(-90deg);
  transition: all 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 12px;
    right: 165px;
    bottom: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #202020;
    transform: rotate(90deg);
  }

  .rc-slider {
    .rc-slider-rail,
    .rc-slider-track,
    .rc-slider-step {
      height: 4px;
      transition: all 80ms ease-in-out;
    }

    .rc-slider-handle {
      margin-top: -2px;
      width: 8px;
      height: 8px;
    }
  }
`

export const MobileQueueButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #ffff;
`