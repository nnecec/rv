import React, { cloneElement } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { colors } from '@atlaskit/theme'

const grid = 8

const imageSize = 40

const Container = styled.div`
  border-radius: 4px;
  border: 2px solid transparent;
  border-color: ${props => props.isDragging ? colors.B100 : 'transparent'};
  background-color: ${props => {
    if (props.isDragging) {
      return colors.Y100
    }

    if (props.isGroupedOver) {
      return colors.N30
    }

    return colors.N0
  }};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : 'none'};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: ${imageSize}px;
  margin-bottom: ${grid}px;
  user-select: none;

  /* anchor overrides */
  color: ${colors.N900};

  &:hover,
  &:active {
    color: ${colors.N900};
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`

const DraggableCard = (props) => {
  const {
    droppableId = 'LIST',
    index,
    children,
    // style
    style,
    ...restProps
  } = props

  return (<Draggable droppableId={droppableId} index={index} {...restProps}>
    {(
      dragProvided,
      dragSnapshot
    ) => {
      const childNode =
        typeof children === 'function'
          ? children(dragProvided, dragSnapshot)
          : cloneElement(children, {
            dragProvided,
            dragSnapshot
          })
      return <Container
        isDragging={dragSnapshot.isDragging}
        isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
        ref={dragProvided.innerRef}
        {...dragProvided.draggableProps}
        {...dragProvided.dragHandleProps}>
        {childNode}
      </Container>
    }}
  </Draggable >)
}

export default DraggableCard
