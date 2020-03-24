import React from 'react'
import { Card, Tabs } from 'antd'
import { useObserver } from 'mobx-react-lite'

import FormilyRender from '../components/formily-render'
import PropertyEditor from '../components/property-editor'
import { DragBox } from '../components/box'
import { ReactSortable } from '../components/sortable'

import shortid from 'shortid'

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
      }}>
      <TabPane tab="Components" key="components">
        <ReactSortable
          list={paletteData.components}
          setList={(data) => {
            paletteData.components = data
          }}
          group={{
            name: 'sortable-group',
            pull: 'clone',
            put: false
          }}
          animation={150}
          clone={item => {
            return { ...item, id: shortid.generate() }
          }}
          sort={false}
        >
          {paletteData.components.map((config, index) => {
            return (
              <DragBox key={config.id}>
                <FormilyRender config={{
                  type: 'object',
                  properties: {
                    [config.key]: config.property
                  }
                }}></FormilyRender>
              </DragBox>
            )
          })}
        </ReactSortable>
      </TabPane>
      <TabPane tab="Property" key="property">
        <PropertyEditor paletteData={paletteData}></PropertyEditor>
      </TabPane>
    </Tabs>
  ))
}

export default PaletteComponents
