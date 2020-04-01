import React from 'react'
import {
  SchemaForm
} from '@formily/antd'
import { setup } from '@formily/antd-components'
import { useObserver } from 'mobx-react-lite'

setup()
const SchemaRender = (props) => {
  const { config, children, ...restProps } = props

  return useObserver(() => (
    <div>
      <SchemaForm
        schema={config}
        {...restProps}
      >
        {children}
      </SchemaForm>
    </div>
  ))
}
export default SchemaRender
