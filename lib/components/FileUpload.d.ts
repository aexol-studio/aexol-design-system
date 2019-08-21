import * as React from 'react'
export interface IFileUploadProps {
  label?: string
  value: string | File
  width?: number
  height?: number
  onChange: (e: File) => void
  style?: React.CSSProperties
}
export declare const FileUpload: React.FunctionComponent<IFileUploadProps>
export default FileUpload
