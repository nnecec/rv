// @flow
import React, { useEffect, useRef } from 'react'
import { Button, Card } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useObserver } from 'mobx-react-lite'

import { ReactSortable } from '../components/sortable'

import { SchemaRender } from '../components/formily-render'
import { DragBox } from '../components/box'

const PaletteComponents = props => {
  const { paletteData } = props

  return useObserver(() => (
    <Card
      title="Board"
      bodyStyle={{ padding: 0, height: '100%', display: 'flex' }}
      style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <ReactSortable
        list={paletteData.board}
        setList={(data) => {
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
            controls={[{
              icon: <DeleteOutlined />,
              onClick: (e) => {
                e.stopPropagation()
                paletteData.board = paletteData.board.filter(d => d.id !== config.id)
                if (config.id === paletteData.editingId) {
                  paletteData.editingId = null
                }
              }
            }]}
          >
            <SchemaRender config={{
              type: 'object',
              properties: {
                [config.key]: config.property
              }
            }}></SchemaRender>
          </DragBox>
        ))}
      </ReactSortable>
    </Card >
  ))
}

export default PaletteComponents
