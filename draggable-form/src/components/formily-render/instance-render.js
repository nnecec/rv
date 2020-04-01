import React, { useMemo } from 'react'
import { isPlainObject } from 'lodash'

import SchemaRender from './schema-render'
import { createEffects } from './effects'

const InstanceRender = (props) => {
  const { config, onSubmit, children, ...restProps } = props

  const [memoConfig, apiMap] = useMemo(() => {
    const api = {}
    const memoConfig = findEnumAPI(config, api)
    console.log(memoConfig, api)
    return [memoConfig, api]
  }, [config])

  function findEnumAPI (obj, api) {
    for (const [key, value] of Object.entries(obj)) {
      if (isPlainObject(value)) {
        if ('enum' in value && typeof value.enum === 'string') {
          api[key] = value.enum
          delete value.enum
        } else {
          obj[key] = findEnumAPI(value, api)
        }
      }
    }
    return obj
  }
  if (!apiMap) {
    return 'loading...'
  }

  return <SchemaRender config={config} onSubmit={onSubmit} effects={createEffects({ api: apiMap })} {...restProps}>
    {children}
  </SchemaRender>
}

export default InstanceRender
