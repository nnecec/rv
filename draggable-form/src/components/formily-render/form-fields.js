import React from 'react'
import { registerFormFields, connect } from '@formily/antd' // 或者 @formily/next

import { Cascader as AntdCascader } from 'antd'

const Cascader = props => {
  return <AntdCascader options={props.dataSource} value={props.value || []} onChange={value => props.onChange(value)} />
}

registerFormFields({
  Cascader: connect()(Cascader)
})
