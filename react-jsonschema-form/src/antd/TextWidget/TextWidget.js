import React from 'react';

import { Input } from 'antd'

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  name
}) => {
  const _onChange = ({ target: { value } }) => onChange(value === '' ? options.emptyValue : value);

  const _onBlur = ({ target: { value } }) => onBlur(id, value);

  const _onFocus = ({ target: { value } }) => onFocus(id, value);

  return (
    <Input
      id={id}
      type={schema.type}
      value={value ? value : ''}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      disabled={disabled || readonly} />
    //   < FormControl
    //     fullWidth = { true}
    // //error={!!rawErrors}
    // required = { required }
    //   >
    //   <TextField
    //     id={id}
    //     label={label || schema.title}
    //     autoFocus={autofocus}
    //     required={required}
    //     disabled={disabled || readonly}
    //     name={name}
    //     type={schema.type}
    //     value={value ? value : ''}
    //     onChange={_onChange}
    //     onBlur={_onBlur}
    //     onFocus={_onFocus}
    //   />
    //   </FormControl >
  );
};

export default TextWidget;