import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Spring } from 'react-spring'

// import './floor.css'

const FloorOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  font-family: Impact;
  font-weight: bold;
  font-size: 50px;
  color: #fff;
  cursor: pointer;

  &:first-child {
    font-size: 65vh;
    justify-content: flex-start;
    background-color: #252525;
    color: #ff3f34;
  }

  &:last-child {
    font-size: 65vh;
    justify-content: flex-end;
    background-color: #ff3f34;
    color: #252525;
  }

  &:hover {

  }
`


class Floors extends Component {
  state = {
    hasSelected: false
  }

  handleFloorSelection = (floorNumber) => {
    localStorage.setItem('floorNumber', floorNumber);
    this.props.history.push('/');
  }

  render() {
    const { hasSelected } = this.state

    return (
      <div>
        <FloorOption onClick={() => this.handleFloorSelection(2)}>
          <Spring
            from={{
              width: 100,
              transform:
                'translate3d(400px,0,0) scale(2) rotateX(90deg)',
              shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
            }}
            to={{ 
              width: 'auto',
              transform: 
                'translate3d(0px,0,0) scale(1) rotateX(0deg)',
              shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
            }}>
            {props => <span style={props}>2F</span>}
          </Spring>
        </FloorOption>

        <FloorOption onClick={() => this.handleFloorSelection(3)}>
          <Spring
            from={{
            width: 100,
            transform:
              'translate3d(-800px,0,0) scale(2) rotateX(90deg)',
            shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
          }}
          to={{ 
            width: 'auto',
            transform: 
              'translate3d(0px,0,0) scale(1) rotateX(0deg)',
            shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
          }}>
            {props => <span style={props}>3F</span>}
          </Spring>
        </FloorOption>
      </div>
    )
  }
}

export default withRouter(Floors);