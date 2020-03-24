import React, { useEffect, useRef } from 'react'
import { Row, Col, Button, Input, Form, Select, Switch, Collapse, Divider } from 'antd'
import { useObserver, observer } from 'mobx-react-lite'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 2, span: 20 }
}

const { Option } = Select
const { Panel } = Collapse

const PropertyEditor = (props) => {
  const { paletteData } = props

  const [form] = Form.useForm()
  const configRef = useRef({})

  const editingId = useObserver(() => paletteData.editingId)

  useEffect(() => {
    if (editingId) {
      configRef.current = paletteData.board.find(item => item.id === editingId)
      const { key, property } = configRef.current
      form.setFieldsValue({ key, ...property })
    }
  }, [editingId])

  function onFinish (values) {
    console.log(values)
    const index = paletteData.board.findIndex(item => item.id === editingId)

    paletteData.board[index].key = values.key
    delete values.key
    paletteData.board[index].property = {
      ...configRef.current.property,
      ...values
    }
  }

  if (!editingId) return 'Please select a card.'

  return (
    <div>
      <Form
        {...layout}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">Apply</Button>
        </Form.Item>

        {
          // 'enum' in configRef.current.property && <Form.Item label="enum">
          //   {
          //     configRef.current.property.enum.map((eItem, i) => {
          //       let value = null
          //       let label = null
          //       if ('label' in eItem && 'value' in eItem) {
          //         label = eItem.label
          //         value = eItem.value
          //       }

          //       return <Input.Group key={value}>
          //         <Row>
          //           <Col span={10}>
          //             <Input value={label} onChange={(e) => {
          //               config.property.enum[i].label = e.target.value
          //             }} />
          //           </Col>
          //           <Col span={1}>:</Col>
          //           <Col span={10}>
          //             <Input value={value} onChange={(e) => {
          //               config.property.enum[i].value = e.target.value
          //             }} />
          //           </Col>
          //         </Row>
          //       </Input.Group>
          //     })
          //   }
          // </Form.Item>
        }

        <Collapse defaultActiveKey="basic" onChange={(key) => console.log(key)}>
          <Panel header="Basic" key="basic">
            <Form.Item name="key" label="key" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="name" label="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="title" label="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="type" label="type" rules={[{ required: true }]}>
              <Select>
                <Option value="string">string</Option>
                <Option value="object">object</Option>
                <Option value="array">array</Option>
                <Option value="number">number</Option>
              </Select>
            </Form.Item>

            <Divider></Divider>
            <Form.Item name="description" label="description">
              <Input />
            </Form.Item>
          </Panel>

          <Panel header="Rules" key="rules">
            <Form.Item name="required" label="required">
              <Switch />
            </Form.Item>
            <Form.Item name="pattern" label="pattern">
              <Input addonBefore="/" addonAfter="/"></Input>
            </Form.Item>
          </Panel>
          <Panel header="Component" key="component">
            <p>component</p>
          </Panel>
        </Collapse>
      </Form>

    </div>
  )
}

export default PropertyEditor
