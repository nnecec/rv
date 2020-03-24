export const componentsPanelConfigs = {
  string: {
    type: 'string',
    title: 'String',
    name: 'string',
    'x-component': 'input'
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
    title: 'Radio',
    name: 'radio',
    'x-component': 'radio'
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
    title: 'Select',
    name: 'select',
    'x-component': 'select'
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
    title: 'Checkbox',
    name: 'checkbox',
    'x-component': 'checkbox'
  },
  textarea: {
    type: 'string',
    title: 'TextArea',
    name: 'textarea',
    'x-component': 'textarea'
  },
  number: {
    type: 'number',
    title: '数字选择',
    name: 'number',
    'x-component': 'numberpicker'
  },
  boolean: {
    type: 'boolean',
    title: '开关选择',
    name: 'boolean',
    'x-component': 'switch'
  },
  date: {
    type: 'string',
    title: '日期选择',
    name: 'date',
    'x-component': 'datepicker'
  },
  daterange: {
    type: 'array<date>',
    title: '日期范围',
    default: [
      '2018-12-19',
      '2018-12-19'
    ],
    name: 'daterange',
    'x-component': 'daterangepicker'
  }
}
