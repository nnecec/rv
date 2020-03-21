// @flow
import React from 'react'
import styled from 'styled-components'
import { Card, Tabs } from 'antd'

import DroppablePanel from '../components/droppable-panel'
import DraggableCard from '../components/draggable-card'
import DropZone from '../components/drop-zone'
import FormilyRender from '../components/formily-render'

import { DRAG_TYPE } from '../utils/constant'

const { TabPane } = Tabs

const PaletteComponents = props => {
  const { components } = props

  return (
    <Tabs
      defaultActiveKey="1"
      tabBarStyle={{ padding: '0 8px' }}
      style={{ backgroundColor: '#fff' }}
      onChange={(key) => console.log(key)}>
      <TabPane tab="Components" key="1">
        <DroppablePanel
          droppableId="components"
          type={DRAG_TYPE}
          internalScroll
        >
          <DropZone>
            {components.map((config, index) => {
              return <DraggableCard
                draggableId={`component@@${config.usage.id}`}
                index={index}
                key={config.usage.id}
              >
                <FormilyRender config={config}></FormilyRender>
              </DraggableCard>
            })}
          </DropZone>
        </DroppablePanel>
      </TabPane>
      <TabPane tab="Property" key="2">

      </TabPane>
    </Tabs>
  )
}

export default PaletteComponents
