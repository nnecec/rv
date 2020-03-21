import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Drawer, PageHeader } from 'antd'
import {
  Submit,
  Reset
} from '@formily/antd'

import FormilyRender from '../components/formily-render'

const Container = styled.div`
`

const ToolBar = (props) => {
  const { paletteData } = props
  const [schema, setSchema] = useState({})
  const [drawerVisible, setDrawerVisible] = useState(false)

  function handlePreview () {
    console.log(paletteData)
    const properties = {}
    paletteData.board.forEach(config => {
      properties[config.usage.name] = config.usage.property
    })

    setSchema({
      type: 'object',
      properties
    })
    setDrawerVisible(true)
  }

  return (
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
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormilyRender>
      </Drawer>
    </Container>
  )
}

export default ToolBar
