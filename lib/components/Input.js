import * as React from 'react'
import * as styles from './styles/InputStyle'
const LABEL_STAR = ''
export const Input = props => {
  const {
    type,
    label,
    starLabel = LABEL_STAR,
    placeholder,
    required = false,
    maxLength,
    onChange,
    style,
    value
  } = props
  const handleChange = e => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }
  return React.createElement(
    'div',
    { className: styles.TextInputContainer, style: Object.assign({}, style) },
    React.createElement(
      'div',
      { className: styles.TextInputLabelDiv },
      label &&
        React.createElement(
          'label',
          { className: styles.TextInputLabel },
          label
        ),
      starLabel &&
        React.createElement('span', { className: styles.TextInputStar }, '*')
    ),
    React.createElement(
      'div',
      { className: styles.TextInputDiv },
      React.createElement('input', {
        type: type || 'text',
        className: styles.TextInput,
        onChange: handleChange,
        maxLength: maxLength,
        placeholder: placeholder,
        required: required,
        value: value
      })
    )
  )
}
export default Input
//# sourceMappingURL=Input.js.map
