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
import * as styles from './styles/FileUploadStyle'
const DEFAULT_WIDTH = 168
const DEFAULT_HEIGHT = 40
export const FileUpload = props => {
  const {
      label = 'Upload .gql',
      value,
      width = DEFAULT_WIDTH,
      height = DEFAULT_HEIGHT,
      onChange,
      style
    } = props,
    restProps = __rest(props, [
      'label',
      'value',
      'width',
      'height',
      'onChange',
      'style'
    ])
  const handleChange = e => {
    if (onChange) {
      onChange(e.target.files[0])
    }
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'label',
      {
        htmlFor: 'fileUpload',
        className: styles.FileLabel,
        style: Object.assign({ width: width, height: height }, style)
      },
      label
    ),
    React.createElement(
      'input',
      Object.assign(
        {
          className: styles.FileUpload,
          type: 'file',
          id: 'fileUpload',
          onChange: handleChange
        },
        restProps
      )
    )
  )
}
export default FileUpload
//# sourceMappingURL=FileUpload.js.map
