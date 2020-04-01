import React from 'react'

import { Form } from 'antd'

const FormItem = Form.Item

const FieldTemplate = (props) => {
  const {
    id,
    children,
    displayLabel,
    rawErrors = [],
    rawHelp,
    rawDescription,
    label,
    required
  } = props

  console.log(props)
  return (
    <FormItem
      label={displayLabel && label}
      extra={rawHelp || undefined}
      required={required}
      validateStatus={rawErrors.length > 0 && 'error'}
      help={rawErrors.length > 0 && rawErrors[0]}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      {children}
      {/* {displayLabel && rawDescription ? (
        <Typography variant="caption" color="textSecondary">
          {rawDescription}
        </Typography>
      ) : null} */}
      {/* {rawErrors.length > 0 && (
        <List dense={true}>
          {rawErrors.map((error, i) => {
            return (
              <ListItem key={i}>
                <FormHelperText id={id}>- {error}</FormHelperText>
              </ListItem>
            );
          })}
        </List>
      )} */}
    </FormItem >
  )
}

export default FieldTemplate
