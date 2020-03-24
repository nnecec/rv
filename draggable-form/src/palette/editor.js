// @flow
import React from 'react'
import styled from 'styled-components'
import { Card, Tabs } from 'antd'
import { useObserver } from 'mobx-react-lite'

import DroppablePanel from '../components/droppable-panel'
import DraggableCard from '../components/draggable-card'
import DropZone from '../components/drop-zone'
import FormilyRender from '../components/formily-render'
import PropertyEditor from '../components/property-editor'

import { DRAG_TYPE } from '../utils/constant'

const { TabPane } = Tabs

const PaletteComponents = props => {
  const { paletteData } = props

  return useObserver(() => (
    <Tabs
      activeKey={paletteData.tabKey}
      tabBarStyle={{ padding: '0 8px' }}
      style={{ backgroundColor: '#fff' }}
      onChange={(key) => {
        paletteData.tabKey = key
        console.log(paletteData)
      }}>
      <TabPane tab="Components" key="components">
        <DroppablePanel
          droppableId="components"
          type={DRAG_TYPE}
          internalScroll
        >
          <DropZone>
            {paletteData.components.map((config, index) => {
              return <DraggableCard
                draggableId={`component@@${config.id}`}
                index={index}
                key={config.id}
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
        </DroppablePanel>
      </TabPane>
      <TabPane tab="Property" key="property">
        <PropertyEditor paletteData={paletteData}></PropertyEditor>
      </TabPane>
    </Tabs>
  ))
}

export default PaletteComponents
