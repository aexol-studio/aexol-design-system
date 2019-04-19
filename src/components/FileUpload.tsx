import * as React from 'react'
import * as styles from './styles/FileUploadStyle'

export interface IFileUploadProps {
  label?: string
  value: string | File
  width?: number
  height?: number
  onChange: (e: File) => void
  style?: React.CSSProperties
}

const DEFAULT_WIDTH = 168
const DEFAULT_HEIGHT = 40

export const FileUpload: React.FunctionComponent<IFileUploadProps> = props => {
  const {
    label = 'Upload .gql',
    value,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    onChange,
    style,
    ...restProps
  } = props

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.files[0])
    }
  }

  return (
    <React.Fragment>
      <label
        htmlFor="fileUpload"
        className={styles.FileLabel}
        style={{
          width: width,
          height: height,
          ...style
        }}
      >
        {label}
      </label>
      <input
        className={styles.FileUpload}
        type="file"
        id="fileUpload"
        onChange={handleChange}
        {...restProps}
      />
    </React.Fragment>
  )
}

export default FileUpload
