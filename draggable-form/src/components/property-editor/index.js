import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Radio, Tabs, Row, Col, Button, Input, Form, Select, Switch, Collapse, Divider } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { useObserver, observer } from 'mobx-react-lite'

import { ReactSortable } from '../sortable'
import { DragBox } from '../box'

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
  const [currentEnum, setCurrentEnum] = useState([])
  const [enumType, setEnumType] = useState(1)

  const editingId = useObserver(() => paletteData.editingId)

  useEffect(() => {
    if (editingId) {
      configRef.current = paletteData.board.find(item => item.id === editingId)
      const { key, property } = configRef.current
      const { enum: propertyEnum, ...resetProperty } = property

      form.setFieldsValue({ key, ...resetProperty })

      setCurrentEnum(propertyEnum)
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

    if (enumType === 1) {
      if (currentEnum && currentEnum.length) {
        paletteData.board[index].property.enum = currentEnum
      }
    }
  }

  if (!editingId) return 'Please select a card from Board.'

  return (
    <div>
      <Form
        {...layout}
        onFinish={onFinish}
        form={form}
        initialValues={{
          enum: 'https://jsonplaceholder.typicode.com/posts'
        }}
      >
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">Apply</Button>
        </Form.Item>

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
            {/* <Form.Item name="type" label="type" rules={[{ required: true }]}>
              <Select>
                <Option value="string">string</Option>
                <Option value="object">object</Option>
                <Option value="array">array</Option>
                <Option value="number">number</Option>
              </Select>
            </Form.Item> */}

            <Divider></Divider>

            {
              currentEnum && currentEnum.length > 0 &&
              <div>
                <p>Enum</p>
                <Radio.Group onChange={(e) => setEnumType(e.target.value)} value={enumType}>
                  <Radio value={1}>Custom options</Radio>
                  <Radio value={2}>Remote API</Radio>
                </Radio.Group>
                {
                  enumType === 1 &&
                  <>
                    <ReactSortable animation={150} list={currentEnum} setList={setCurrentEnum}>
                      {currentEnum.map(({ label, value }, i) => {
                        return <DragBox key={i}>
                          <Input.Group>
                            <Row>
                              <Col span={10}>
                                <Input value={label} onChange={(e) => {
                                  e.persist()
                                  setCurrentEnum(currentEnum => {
                                    currentEnum[i].label = e.target.value
                                    return [...currentEnum]
                                  })
                                }} />
                              </Col>
                              <Col span={1}>:</Col>
                              <Col span={10}>
                                <Input value={value} onChange={(e) => {
                                  e.persist()
                                  setCurrentEnum(currentEnum => {
                                    currentEnum[i].value = e.target.value
                                    return [...currentEnum]
                                  })
                                }} />
                              </Col>
                              <Col span={1}><Button icon={<CloseOutlined />} size="small" onClick={() => {
                                setCurrentEnum(currentEnum => currentEnum.filter((_, index) => index !== i))
                              }} /></Col>
                            </Row>
                          </Input.Group>
                        </DragBox>
                      })}
                    </ReactSortable>
                    <Button icon={<PlusOutlined />} size="small" onClick={() => {
                      setCurrentEnum(currentEnum => currentEnum.concat([{ label: '', value: '' }]))
                    }} />
                  </>
                }
                {
                  enumType === 2 && <Form.Item name="enum">
                    <Input />
                  </Form.Item>
                }

              </div>
            }

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
