import React from 'react'

import { Select } from 'antd'

import { WidgetProps } from '@rjsf/core'
import { asNumber, guessType } from '@rjsf/core/lib/utils'

const nums = new Set(['number', 'integer'])
const { Option } = Select
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
const processValue = (schema, value) => {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema
  if (value === '') {
    return undefined
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber)
  } else if (type === 'boolean') {
    return value === 'true'
  } else if (type === 'number') {
    return asNumber(value)
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every((x) => guessType(x) === 'number')) {
      return asNumber(value)
    } else if (schema.enum.every((x) => guessType(x) === 'boolean')) {
      return value === 'true'
    }
  }

  return value
}

const SelectWidget = ({
  schema,
  id,
  options,
  label,
  required,
  disabled,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus
}) => {
  const { enumOptions, enumDisabled } = options

  const emptyValue = multiple ? [] : ''

  const _onChange = (value) => onChange(processValue(schema, value))

  const _onBlur = ({ target: { value } }) => onBlur(id, processValue(schema, value))

  const _onFocus = ({ target: { value } }) => onFocus(id, processValue(schema, value))

  return (
    <Select
      multiple={typeof multiple === 'undefined' ? false : multiple}
      value={typeof value === 'undefined' ? emptyValue : value}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    >
      {enumOptions.map(({ value, label }, i) => {
        const disabled = enumDisabled && enumDisabled.includes(value)
        return (
          <Option key={i} value={value} disabled={disabled}>
            {label}
          </Option>
        )
      })}
    </Select>
  )
}

export default SelectWidget
