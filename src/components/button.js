import React from 'react';

function Button({
  name,
  id,
  onEvent,
  children,
  autofocus,
  disabled,
  form,
  formaction,
  formenctype,
  formmethod,
  formnovalidate,
  formtarget,
  type,
  value,
}) {
  return (
    <button
      autofocus={autofocus}
      disabled={disabled}
      type={type}
      value={value}
      name={name}
      id={id}
      onClick={onEvent}
    >
      {children}
    </button>
  );
}

export default Button;
