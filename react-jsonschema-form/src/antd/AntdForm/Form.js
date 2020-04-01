import React from 'react'
import { Form as AntdForm } from 'antd'

const Form = ({ onSubmit, ...restProps }) => {
  console.log(restProps)
  return <AntdForm onFinish={onSubmit} {...restProps} />
}

export default Form
