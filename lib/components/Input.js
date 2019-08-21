var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
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
      password = false,
      passwordLink,
      passwordText,
      maxLength,
      onChange,
      width,
      fullWidth,
      style
    } = props,
    restProps = __rest(props, [
      'type',
      'label',
      'starLabel',
      'placeholder',
      'required',
      'password',
      'passwordLink',
      'passwordText',
      'maxLength',
      'onChange',
      'width',
      'fullWidth',
      'style'
    ])
  const handleChange = e => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }
  return React.createElement(
    'div',
    {
      className: styles.TextInputContainer,
      style: Object.assign({ width: fullWidth ? '80%' : width }, style)
    },
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
      React.createElement(
        'input',
        Object.assign(
          {
            type: type || 'text',
            className: styles.TextInput,
            onChange: handleChange,
            maxLength: maxLength,
            placeholder: placeholder,
            required: required
          },
          restProps
        )
      ),
      password &&
        React.createElement(
          'div',
          { className: styles.TextInputLabelPassword },
          React.createElement('div', { className: styles.TextInputSpacer }),
          React.createElement(
            'a',
            { className: styles.TextInputHref, href: passwordLink },
            passwordText
          )
        )
    )
  )
}
export default Input
//# sourceMappingURL=Input.js.map
