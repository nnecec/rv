import React, { cloneElement } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { colors, palette, space } from '../theme/config'

const grid = 8

const imageSize = 40

const Container = styled.div`
  position: relative;
  border-radius: 4px;
  border: 2px solid transparent;
  border-color: ${props => {
    if (props.isDragging) { return palette.blue[3] }
    if (props.isSelected) { return palette.blue[6] }
    return 'transparent'
  }};
  background-color: ${props => {
    if (props.isDragging) {
      return palette.blue[4]
    }
    if (props.isSelected) {
      return palette.blue[3]
    }

    return palette.gray[1]
  }};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.slate}` : 'none'};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: ${imageSize}px;
  margin: ${grid}px;
  user-select: none;

  /* anchor overrides */
  color: ${colors.dark};

  &:hover,
  &:active {

  background-color: ${props => {
    if (!props.isSelected) {
      return colors.smoke
    }
  }};
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${palette.blue[3]};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`

const Controls = styled.div`
  position:absolute;
  display: none;
  right: ${space[1]}px;
  top: -${space[2]}px;

  ${Container}:hover & {
    display: inline-block;
  }
`

export const DragBox = (props) => {
  const {
    children,
    onClick,
    isSelected = false,
    isDragging = false,
    controls,
    ...restProps
  } = props

  return (<Container
    isSelected={isSelected}
    isDragging={isDragging}
    onClick={onClick}
  >
    {
      Array.isArray(controls) && <Controls>
        {controls.map(({ icon, onClick }, i) => (
          < Button key={i} size="small" icon={icon} shape="circle" onClick={onClick} />
        ))}
      </Controls>
    }

    {children}
  </Container>)
}
