import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/WhiteTileStyles'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { Button } from './Button'
import { Select } from './Select'
type SelectComumnsTxt = {
  options: Array<{
    value: number
    label: string
  }>
  placeholder: string
  label: string
}

type WhiteTileButton = {
  href?: string,
  target?: string
}

type InputTextName = {
  labelName: string
  placeholderName?: string
  type?: string
  starLabel?: boolean
}
type InputTextEmail = {
  labelEmail: string
  placeholderEmail?: string
  type?: string
  starLabel?: boolean
}

type CheckboxTextFirst = {
  shapeFirst: 'round' | 'square'
  checkboxParagraphFirst?: string | JSX.Element
}

type CheckboxTextSecond = {
  shapeSecond: 'round' | 'square'
  checkboxParagraphSecond?: string | JSX.Element
}

export interface WhiteTileProps {
  SelectComumnsTxt: SelectComumnsTxt
  InputTextName: InputTextName
  InputTextEmail: InputTextEmail
  CheckboxTextFirst: CheckboxTextFirst
  CheckboxTextSecond: CheckboxTextSecond
  WhiteTileParagraph: string
  WhiteButtonText: string
  WhiteTileButton: WhiteTileButton
}

export const WhiteTile: React.FunctionComponent<WhiteTileProps> = props => {
  const {
    SelectComumnsTxt,
    InputTextName,
    InputTextEmail,
    CheckboxTextFirst,
    CheckboxTextSecond,
    WhiteTileParagraph,
    WhiteButtonText,
    WhiteTileButton
  } = props

  return (
    <div className={classnames(styles.WhiteTileMain)}>
      <div className={styles.WhiteTileContent}>
        <Input
          label={InputTextName.labelName}
          placeholder={InputTextName.placeholderName}
          type={InputTextName.type}
          starLabel={InputTextName.starLabel}
        />
        <Input
          label={InputTextEmail.labelEmail}
          placeholder={InputTextEmail.placeholderEmail}
          type={InputTextEmail.type}
          starLabel={InputTextEmail.starLabel}
        />
        <div className={styles.WhiteTileSelectContent}>
          <Select
            style={{
              width: '100%'
            }}
            options={SelectComumnsTxt.options}
            label={SelectComumnsTxt.label}
            placeholder={SelectComumnsTxt.placeholder}
          />
        </div>
        <div className={styles.WhiteTileCheckboxElement}>
          <div className={styles.WhiteTileCheckboxContent}>
            <Checkbox
              shape={CheckboxTextFirst.shapeFirst}
              checkboxParagraph={CheckboxTextFirst.checkboxParagraphFirst}
            />
          </div>
          <div className={styles.WhiteTileCheckboxContent}>
            <Checkbox
              shape={CheckboxTextSecond.shapeSecond}
              checkboxParagraph={CheckboxTextSecond.checkboxParagraphSecond}
            />
          </div>
          <div className={styles.WhiteTileContentParagraph}>
            <p className={styles.WhiteTileCheckboxContentParagraph}>
              {WhiteTileParagraph}
            </p>
          </div>
          <div className={styles.WhiteTileCheckboxContentButton}>
            <Button href={WhiteTileButton.href}>
            {WhiteButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
