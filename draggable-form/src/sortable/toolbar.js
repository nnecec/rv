import React, { useState } from 'react'
import styled from 'styled-components'
import { useObserver } from 'mobx-react-lite'
import { Button, Drawer, PageHeader } from 'antd'
import { Submit, Reset } from '@formily/antd'
import ReactJSONView from 'react-json-view'

import { InstanceRender } from '../components/formily-render'

const Container = styled.div`
`

const ToolBar = (props) => {
  const { paletteData } = props
  const [schema, setSchema] = useState({})
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [jsonDrawerVisible, setJsonDrawerVisible] = useState(false)

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
        extra={[<Button key="preview" onClick={handlePreview}>Preview</Button>]}
      ></PageHeader>

      <Drawer
        title="Preview"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        width={800}
      >

        <InstanceRender config={schema} onSubmit={values => console.log(values)}>
          <Submit>Confirm</Submit>
          <Reset>Reset</Reset>
          <Button onClick={() => setJsonDrawerVisible(true)}>View JSON</Button>
        </InstanceRender>

        <Drawer
          title="JSON Viewer"
          width={400}
          closable={false}
          onClose={() => setJsonDrawerVisible(false)}
          visible={jsonDrawerVisible}
        >
          <ReactJSONView src={schema} />
        </Drawer>
      </Drawer>
    </Container>
  ))
}

export default ToolBar
