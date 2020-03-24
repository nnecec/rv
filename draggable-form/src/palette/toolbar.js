import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Drawer, PageHeader } from 'antd'
import {
  Submit,
  Reset
} from '@formily/antd'

import FormilyRender from '../components/formily-render'
import { useObserver } from 'mobx-react-lite'

const Container = styled.div`
`

const ToolBar = (props) => {
  const { paletteData } = props
  const [schema, setSchema] = useState({})
  const [drawerVisible, setDrawerVisible] = useState(false)
  console.log(paletteData)

  function handlePreview () {
    const properties = {}
    paletteData.board.forEach(config => {
      properties[config.key] = config.property
    })

    setSchema({
      type: 'object',
      properties
    })
    setDrawerVisible(true)
  }

  return useObserver(() => (
    <Container>
      <PageHeader
        ghost={false}
        title="Tool Bar"
        extra={[
          <Button key="preview" onClick={handlePreview}>Preview</Button>
        ]}
      ></PageHeader>

      <Drawer
        title="Preview"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        width={800}
      >
        <FormilyRender config={schema} onSubmit={values => console.log(values)}>
          <Submit>确认</Submit>
          <Reset>重置</Reset>
        </FormilyRender>
      </Drawer>
    </Container>
  ))
}

export default ToolBar
