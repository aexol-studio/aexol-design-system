import * as React from 'react'
import * as styles from './styles/FileUploadStyle'

export interface IFileUploadProps {
  label?: string
  value: string | File
  onChange: (e: File) => void
  style?: React.CSSProperties
}

export const FileUpload: React.FunctionComponent<IFileUploadProps> = props => {
  const { label = 'Upload .gql', value, onChange, style, ...restProps } = props

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.files[0])
    }
  }

  return (
    <React.Fragment>
      <label htmlFor="fileUpload" className={styles.FileLabel}>
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
