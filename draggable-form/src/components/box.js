import React, { cloneElement } from 'react'
import styled from 'styled-components'
import { colors } from '@atlaskit/theme'

const grid = 8

const imageSize = 40

const Container = styled.div`
  border-radius: 4px;
  border: 2px solid transparent;
  border-color: ${props => {
    if (props.isDragging) { return colors.B100 }
    if (props.isSelected) { return colors.R100 }
    return 'transparent'
  }};
  background-color: ${props => {
    if (props.isDragging) {
      return colors.Y100
    }

    if (props.isGroupedOver) {
      return colors.N30
    }

    return colors.N20
  }};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : 'none'};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: ${imageSize}px;
  margin: ${grid}px;
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

export const DragBox = (props) => {
  const {
    children,
    onClick,
    isSelected = false,
    isDragging = false,
    ...restProps
  } = props

  return (<Container
    isSelected={isSelected}
    isDragging={isDragging}
    onClick={onClick}
  >
    {children}
  </Container>)
}
