import { createFormActions, FormPath } from '@formily/antd'

export const useLinkageUtils = () => {
  const { setFieldState } = createFormActions()
  const linkage = (key, defaultValue) => (path, value) =>
    setFieldState(path, state => {
      FormPath.setIn(state, key, value !== undefined ? value : defaultValue)
    })
  return {
    hide: linkage('visible', false),
    show: linkage('visible', true),
    visible: linkage('visible'),
    enum: linkage('props.enum', []),
    loading: linkage('loading', true),
    loaded: linkage('loading', false),
    value: linkage('value')
  }
}
