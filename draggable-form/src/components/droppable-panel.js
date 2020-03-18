import React, { cloneElement } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';

export const getBackgroundColor = (
  isDraggingOver,
  isDraggingFrom,
) => {
  if (isDraggingOver) {
    return colors.R50;
  }
  if (isDraggingFrom) {
    return colors.T50;
  }
  return colors.N30;
};

const Wrapper = styled.div`
  background-color: ${props =>
    getBackgroundColor(props.isDraggingOver, props.isDraggingFrom)};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: 8px;
  border: 8px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
  height: 100%;
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
`;

const DroppablePanel = (props) => {
  const {
    droppableId = 'LIST',
    internalScroll,
    children,
    isDropDisabled,
    // style
    scrollContainerStyle,
    style,
    ...restProps
  } = props;




  return (
    <Droppable
      droppableId={droppableId}
      isDropDisabled={isDropDisabled}
      {...restProps}
    >
      {(
        dropProvided,
        dropSnapshot,
      ) => {
        const childNode =
          typeof children === 'function'
            ? children(dropProvided, dropSnapshot)
            : cloneElement(children, {
              dropProvided, dropSnapshot,
            });

        return (
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
            {...dropProvided.droppableProps}
          >

            {internalScroll ? (
              <ScrollContainer style={scrollContainerStyle}>
                {childNode}
              </ScrollContainer>
            ) : (childNode)
            }
          </Wrapper>
        )
      }}
    </Droppable>
  )
}

export default DroppablePanel