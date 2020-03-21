// @flow
import React from 'react'
import styled from 'styled-components'

import { Card } from 'antd'

import DroppablePanel from '../components/droppable-panel'
import DraggableCard from '../components/draggable-card'
import DropZone from '../components/drop-zone'

import { DRAG_TYPE } from '../utils/constant'

const PaletteComponents = props => {
  return (
    <Card
      title="Explorer"
      bodyStyle={{ padding: 0, height: '100%' }}
      style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <DroppablePanel
        droppableId="tree"
        type={DRAG_TYPE}
        internalScroll
      >
        <DropZone>

        </DropZone>
      </DroppablePanel>
    </Card>
  )
}

export default PaletteComponents
