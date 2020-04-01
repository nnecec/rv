import Form from '../AntdForm/Form'
// import ArrayFieldTemplate from '../ArrayFieldTemplate';
// import ErrorList from '../ErrorList';
import Fields from '../Fields'
import FieldTemplate from '../FieldTemplate'
// import ObjectFieldTemplate from '../ObjectFieldTemplate';
import Widgets from '../Widgets'

import { getDefaultRegistry } from '@rjsf/core/lib/utils'

import Validation from '../Validation'

const { fields, widgets } = getDefaultRegistry()

const Theme = {
  ...Validation,
  // ArrayFieldTemplate,
  fields: { ...fields, ...Fields },
  FieldTemplate,
  // ObjectFieldTemplate,
  widgets: { ...widgets, ...Widgets }
  // ErrorList,
  // tagName: Form
}

export default Theme
