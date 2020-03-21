// @flow
import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'

import DroppablePanel from '../components/droppable-panel'
import DraggableCard from '../components/draggable-card'
import DropZone from '../components/drop-zone'
import FormilyRender from '../components/formily-render'

import { DRAG_TYPE } from '../utils/constant'

const PaletteComponents = props => {
  const { data } = props
  return (
    <Card
      title="Board"
      bodyStyle={{ padding: 0, height: '100%' }}
      style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <DroppablePanel
        droppableId="board"
        type={DRAG_TYPE}
        internalScroll
      >
        <DropZone>
          {data.map((config, index) => {
            return <DraggableCard
              draggableId={`board-${config}-${index}`}
              index={index}
              key={`${config}-${index}`}
            >
              <FormilyRender config={config}></FormilyRender>

            </DraggableCard>
          })}
        </DropZone>
      </DroppablePanel >
    </Card >
  )
}

export default PaletteComponents
