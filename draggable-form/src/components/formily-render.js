import React from 'react'
import {
  SchemaForm
} from '@formily/antd'
import {
  Input,
  Radio,
  Checkbox,
  Select,
  DatePicker,
  NumberPicker,
  TimePicker,
  Upload,
  Switch,
  Range,
  Transfer,
  Rating
} from '@formily/antd-components'

const components = {
  Input,
  Radio: Radio.Group,
  Checkbox: Checkbox.Group,
  TextArea: Input.TextArea,
  NumberPicker,
  Select,
  Switch,
  DatePicker,
  DateRangePicker: DatePicker.RangePicker,
  YearPicker: DatePicker.YearPicker,
  MonthPicker: DatePicker.MonthPicker,
  WeekPicker: DatePicker.WeekPicker,
  TimePicker,
  Upload,
  Range,
  Rating,
  Transfer
}

const FormilyRender = (props) => {
  const { config, children, ...restProps } = props

  return (
    <div>
      <SchemaForm
        components={components}
        schema={config}
        {...restProps}
      >
        {children}
      </SchemaForm>
    </div>
  )
}

export default FormilyRender
