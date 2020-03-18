import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
import { Button } from 'antd'

const grid = 8
const borderRadius = 2
const getBackgroundColor = (
  isDragging,
  isGroupedOver,
  authorColors,
) => {
  if (isDragging) {
    return 'green';
  }

  if (isGroupedOver) {
    return colors.N30;
  }

  return colors.N0;
};

const getBorderColor = (isDragging, authorColors) =>
  isDragging ? 'red' : 'transparent';

const imageSize = 40;

const Container = styled.div`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${props => getBorderColor(props.isDragging, props.colors)};
  background-color: ${props =>
    getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
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
`;

function getStyle (provided, style) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

function DraggableItem (props) {
  const {
    isDragging,
    isGroupedOver,
    provided,
    style,
    isClone,
    index,
    children
  } = props;

  return (
    <Container
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      isClone={isClone}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided, style)}
      data-is-dragging={isDragging}
      data-index={index}
    >
      {children}
      Hello World!
      <Button>Test</Button>
    </Container>
  );
}

export default React.memo(DraggableItem);