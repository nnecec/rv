import React, { createElement } from 'react'
import * as AntDesignComponents from 'antd'
import { get } from 'lodash'

const ComponentRender = (props) => {
  const { config } = props

  const { componentName, propertiesConfig } = config

  const type = get(AntDesignComponents, componentName) || componentName

  return createElement(type, propertiesConfig)
}

export default ComponentRender
