export const componentsPanelConfigs = {
  string: {
    type: 'string',
    title: '文本',
    name: 'string',
    'x-component': 'input'
  },
  number: {
    type: 'number',
    title: '数字',
    name: 'number',
    'x-component': 'numberpicker'
  },
  radio: {
    type: 'string',
    enum: [{
      label: 1,
      value: 1
    }, {
      label: 2,
      value: 2
    }, {
      label: 3,
      value: 3
    }],
    title: '单选',
    name: 'radio',
    'x-component': 'radio'
  },
  checkbox: {
    type: 'string',
    enum: [{
      label: 1,
      value: 1
    }, {
      label: 2,
      value: 2
    }, {
      label: 3,
      value: 3
    }],
    title: '多选',
    name: 'checkbox',
    'x-component': 'checkbox'
  },
  select: {
    type: 'string',
    enum: [{
      label: 'Leo',
      value: 'leo'
    }, {
      label: 'Lulu',
      value: 'lulu'
    }],
    title: '下拉选择',
    name: 'select',
    'x-component': 'select'
  },
  textarea: {
    type: 'string',
    title: '长文本',
    name: 'textarea',
    'x-component': 'textarea'
  },
  boolean: {
    type: 'boolean',
    title: '开关选择',
    name: 'boolean',
    'x-component': 'switch'
  },
  date: {
    type: 'string',
    title: '日期',
    name: 'date',
    'x-component': 'datepicker'
  },
  daterange: {
    type: 'array<date>',
    title: '日期范围',
    default: [
      '2020-01-01',
      '2020-02-01'
    ],
    name: 'daterange',
    'x-component': 'daterangepicker'
  }
}
