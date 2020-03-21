export const componentsPanelConfigs = {
  "string": {
    "key": "string",
    "type": "string",
    "title": "String",
    "name": "string",
    "x-component": "input"
  },
  "radio": {
    "key": "radio",
    "type": "string",
    "enum": [
      "1",
      "2",
      "3",
      "4"
    ],
    "title": "Radio",
    "name": "radio",
    "x-component": "radio"
  },
  "select": {
    "key": "select",
    "type": "string",
    "enum": [
      "1",
      "2",
      "3",
      "4"
    ],
    "title": "Select",
    "name": "select",
    "x-component": "select"
  },
  "checkbox": {
    "key": "checkbox",
    "type": "string",
    "enum": [
      "1",
      "2",
      "3",
      "4"
    ],
    "title": "Checkbox",
    "name": "checkbox",
    "x-component": "checkbox"
  },
  "textarea": {
    "key": "textarea",
    "type": "string",
    "title": "TextArea",
    "name": "textarea",
    "x-component": "textarea"
  },
  "number": {
    "key": "number",
    "type": "number",
    "title": "数字选择",
    "name": "number",
    "x-component": "numberpicker"
  },
  "boolean": {
    "key": "boolean",
    "type": "boolean",
    "title": "开关选择",
    "name": "boolean",
    "x-component": "switch"
  },
  "date": {
    "key": "date",
    "type": "string",
    "title": "日期选择",
    "name": "date",
    "x-component": "datepicker"
  },
  "daterange": {
    "key": "daterange",
    "type": "array<date>",
    "title": "日期范围",
    "default": [
      "2018-12-19",
      "2018-12-19"
    ],
    "name": "daterange",
    "x-component": "daterangepicker"
  },
}