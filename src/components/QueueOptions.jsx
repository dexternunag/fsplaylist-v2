import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import TooltipTrigger from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

import {
  QueueOptionsDiv,
  Options,
  OptionsList,
  OptionsItem
} from '../styled-components/queue-options'

const Trigger = ({ 
  getTriggerProps, 
  triggerRef
}) => {
  return (
    <span
      {...getTriggerProps({
        ref: triggerRef,
        className: "trigger"
      })}
    >
      <FontAwesomeIcon icon={faEllipsisH} />
    </span>
  );
}

const Tooltip = ({
  getTooltipProps,
  getArrowProps,
  tooltipRef,
  arrowRef,
  placement
}) => {
  return (
    <div
      {...getTooltipProps({
        ref: tooltipRef,
        className: "tooltip-container"
      })}
    >
      <div
        {...getArrowProps({
          ref: arrowRef,
          "data-placement": placement,
          className: "tooltip-arrow"
        })}
      />
      <Options>
        <OptionsList>
          {/* <OptionsItem onClick={() => handleAddToQueue()}>
            Add to Queue
          </OptionsItem>
          <OptionsItem onClick={() => handleListenNext()}>
            Listen Next
          </OptionsItem>
          <OptionsItem onClick={() => handleRemoveFromQueue()}>
            Remove From Queue
          </OptionsItem> */}
        </OptionsList>
      </Options>
    </div>
  );
}

// class Tooltip extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       // <div
//       //   {...getTooltipProps({
//       //     ref: tooltipRef,
//       //     className: "tooltip-container"
//       //   })}
//       // >
//       //   <div
//       //     {...getArrowProps({
//       //       ref: arrowRef,
//       //       "data-placement": placement,
//       //       className: "tooltip-arrow"
//       //     })}
//       //   />
//       //   <Options>
//       //     <OptionsList>
//       //       <OptionsItem onClick={() => handleAddToQueue()}>
//       //         Add to Queue
//       //       </OptionsItem>
//       //       <OptionsItem onClick={() => handleListenNext()}>
//       //         Listen Next
//       //       </OptionsItem>
//       //       <OptionsItem onClick={() => handleRemoveFromQueue()}>
//       //         Remove From Queue
//       //       </OptionsItem>
//       //     </OptionsList>
//       //   </Options>
//       // </div>
//       <div></div>
//     )
//   }
// }

class QueueOptions extends Component {
  state = {
  }

  toggleOption = () => this.setState({toggleOption: !this.toggleOption})
  
  handlePlayQueue = () => {
    console.log('handlePlayQueue')
  }

  handleAddToQueue = () => {
    console.log('handleAddToQueue')
  }

  handleListenNext = () => {
    console.log('handleListenNext')
  }

  handleRemoveFromQueue = () => {
    console.log('handleRemoveFromQueue')
  }

  render() {
    return (
      <QueueOptionsDiv>
        <TooltipTrigger 
          placement="left" 
          trigger="click" 
          handlePlayQueue={() => this.handlePlayQueue()}
          tooltip={Tooltip}
        >
          {Trigger}
          {/* <Trigger 
            handlePlayQueue={() => this.handlePlayQueue()}
            handleAddToQueue={() => this.handleAddToQueue()}
            handleListenNext={() => this.handleListenNext()}
            handleRemoveFromQueue={() => this.handleRemoveFromQueue()}
          /> */}
        </TooltipTrigger>
      </QueueOptionsDiv>
    )
  }
}

export default QueueOptions;