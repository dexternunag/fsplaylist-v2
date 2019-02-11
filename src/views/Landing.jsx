import React, { Component } from 'react'
import styled from 'styled-components'
import Floors from '../components/Floors'

const Floor = styled.div`
 background-color: #000;
`

export default class Landing extends Component {
  render() {
    return (
      <Floor>
        <Floors />
      </Floor>
    )
  }
}
