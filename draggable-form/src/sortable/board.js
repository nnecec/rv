// @flow
import React, { useEffect, useRef } from 'react'
import { Card } from 'antd'
import { useObserver } from 'mobx-react-lite'
import shortid from 'shortid'

import { ReactSortable } from '../components/sortable'

import FormilyRender from '../components/formily-render'
import { DragBox } from '../components/box'

const PaletteComponents = props => {
  const { paletteData } = props

  useEffect(() => {
  }, [handleClickCard])

  function handleClickCard (e) {
    console.log(e)
  }

  return useObserver(() => (
    <Card
      title="Board"
      bodyStyle={{ padding: 0, height: '100%', display: 'flex' }}
      style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <ReactSortable
        list={paletteData.board}
        setList={(data) => {
          console.log(data)
          paletteData.board = data
        }}
        animation={150}
        group={{
          name: 'sortable-group',
          pull: 'clone'
        }}
        style={{ flexGrow: 1 }}
      >
        {paletteData.board.map((config, index) => (
          <DragBox
            key={config.id}
            isSelected={config.id === paletteData.editingId}
            onClick={() => {
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
          </DragBox>
        ))}
      </ReactSortable>
    </Card >
  ))
}

export default PaletteComponents
