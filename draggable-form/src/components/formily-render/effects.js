// src/effects/useAsyncDataSource.ts
import { createFormActions, FormEffectHooks, FormPath } from '@formily/antd'

import { useLinkageUtils } from './linkage'

const { onFormInit$ } = FormEffectHooks

export const useAsyncDataSource = (api) => {
  const { dispatch, setFieldState } = createFormActions()
  const linkage = useLinkageUtils()
  onFormInit$().subscribe(() => {
    for (const [key, value] of Object.entries(api)) {
      setFieldState(key, state => {
        FormPath.setIn(state, 'props.x-props.hasFeedback', true)
      })
      linkage.loading(key)

      ; (async () => {
        await fetch(value).then(res => res.json())
          .then(res => {
            linkage.loaded(key)
            linkage.enum(key, res)
            // 请求结束可以dispatch一个自定义事件收尾，方便后续针对该事件做联动
            dispatch('requestAsyncDataSource', {
              key,
              payload: res
            })
          })
      })()
    }
  })
}

export const createEffects = context => ($) => {
  const { api } = context
  useAsyncDataSource(api)
}
