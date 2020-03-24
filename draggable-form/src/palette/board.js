// @flow
import React, { useEffect, useRef } from 'react'
import { Card } from 'antd'
import { useObserver } from 'mobx-react-lite'

import DroppablePanel from '../components/droppable-panel'
import DraggableCard from '../components/draggable-card'
import DropZone from '../components/drop-zone'
import FormilyRender from '../components/formily-render'

import { DRAG_TYPE } from '../utils/constant'

const PaletteComponents = props => {
  const { paletteData } = props

  useEffect(() => {
    // cardRef.current.addEventListener('boardCardClick', handleClickCard)
    // return () => {
    //   cardRef.current.removeEventListener('boardCardClick', handleClickCard)
    // }
  }, [handleClickCard])

  function handleClickCard (e) {
    console.log(e)
  }

  return useObserver(() => (
    <Card
      title="Board"
      bodyStyle={{ padding: 0, height: '100%' }}
      style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <DroppablePanel
        droppableId="board"
        type={DRAG_TYPE}
        internalScroll
      >
        <DropZone>
          {paletteData.board.map((config, index) => {
            return <DraggableCard
              draggableId={`board-${config}-${index}`}
              index={index}
              key={`${config}-${index}`}
              isSelected={config.id === paletteData.editingId}
              onClick={(activeKey) => {
                if (config.id === paletteData.editingId) {
                  paletteData.editingId = null
                  paletteData.tabKey = 'components'
                } else {
                  paletteData.editingId = config.id
                  paletteData.tabKey = 'property'
                }
              }}
            >
              <FormilyRender config={{
                type: 'object',
                properties: {
                  [config.key]: config.property
                }
              }}></FormilyRender>

            </DraggableCard>
          })}
        </DropZone>
      </DroppablePanel >
    </Card >
  ))
}

export default PaletteComponents
