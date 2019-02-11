import styled from 'styled-components';

export const PlayerControls = styled.div`
  z-index: 2;
`

export const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 5%;

  background-color: #181818;
`

/**
 * Playback Elements
 */
export const PlaybackControls = styled.div`
  display: flex;
  align-items: center;
`

export const PlayButton = styled.div`
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

    &:hover {
      background-color: #ecf0f10a;
    }
  }
`

export const NextButton = styled.div`
  width: 80%;
  color: #E0E0E0;

  svg {
    padding: 8px;
    height: 15px;
    width: 15px !important;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: #ecf0f10a;
    }
  }
`

/**
 * Seekbar Elements
 */
export const SeekbarDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;

  .rc-slider {
    margin-left: 15px;
    margin-right: 15px;

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
  
  span {
    font-size: 10px;
    color: #9E9E9E;
  }
`

export const VolumeDiv = styled.div`
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

    &:hover {
      background-color: #ecf0f10a;
    }
  }
`

export const VolumeRocker = styled.div`
  z-index: 99;
  position: absolute;
  top: -46px;
  left: -70px;
  width: 130px;
  padding: 10px 20px;
  background-color: #202020;
  border-radius: 3px;
  margin-bottom: 15px;
  transition: all 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 33px;
    left: 75px;
    bottom: -10px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid #202020;
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

export const QueueButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #ffff;
`