export const componentsPanelConfigs = {
  string: {
    type: 'string',
    title: '文本',
    name: 'string'
  },
  number: {
    type: 'number',
    title: '数字',
    name: 'number'
  },
  radio: {
    type: 'radio',
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
    name: 'radio'
  },
  checkbox: {
    type: 'checkbox',
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
    name: 'checkbox'
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
    name: 'select'
  },
  textarea: {
    type: 'textarea',
    title: '长文本',
    name: 'textarea'
  },
  boolean: {
    type: 'boolean',
    title: '开关选择',
    name: 'boolean'
  },
  date: {
    type: 'date',
    title: '日期',
    name: 'date'
  },
  daterange: {
    type: 'daterange',
    title: '日期范围',
    default: [
      '2020-01-01',
      '2020-02-01'
    ],
    name: 'daterange'
  },
  year: {
    type: 'year',
    title: '年份',
    name: 'year'
  },
  month: {
    key: 'month',
    type: 'string',
    title: '月份',
    name: 'month'
  },
  time: {
    type: 'time',
    title: '时间',
    name: 'time'
  },
  week: {
    type: 'week',
    title: '周',
    name: 'week',
    'x-component': 'time'
  },
  upload: {
    type: 'upload',
    title: '上传图片',
    name: 'upload',
    'x-component-props': {
      listType: 'card'
    }
  },
  upload2: {
    type: 'upload',
    title: '拖拽上传文件',
    name: 'upload2',
    'x-component-props': {
      listType: 'dragger'
    }
  },
  upload3: {
    type: 'upload',
    title: '普通上传文件',
    name: 'upload3',
    'x-component-props': {
      listType: 'text'
    }
  },
  // range: {
  //   type: 'range',
  //   title: '范围选择',
  //   name: 'range',
  //   'x-component-props': {
  //     min: 0,
  //     max: 1024,
  //     marks: [
  //       0,
  //       1024
  //     ]
  //   }
  // },
  rating: {
    type: 'rating',
    title: '等级',
    name: 'rating'
  },
  cascader: {
    type: 'cascader',
    title: '等级',
    name: 'cascader',
    enum: [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake'
              }
            ]
          }
        ]
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }
            ]
          }
        ]
      }
    ]
  }
}
