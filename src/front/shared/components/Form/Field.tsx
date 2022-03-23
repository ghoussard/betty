import {
  Children,
  HTMLAttributes,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react'
import styled from 'styled-components'
import { TextInput, NumberInput, InputProps } from './Input'
import { Label, LabelProps } from './Label'
import { Override } from '../../utils'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

type FieldProps = Override<HTMLAttributes<HTMLDivElement>, { name?: string }>

const isComponent = (child: unknown): child is ReactElement<unknown> =>
  'object' === typeof child && isValidElement<unknown>(child)

const isLabelComponent = (child: unknown): child is ReactElement<LabelProps> =>
  isComponent(child) && child.type === Label

const isInputComponent = (
  child: unknown
): child is ReactElement<InputProps<unknown>> =>
  isComponent(child) && (child.type === TextInput || child.type === NumberInput)

const Field = ({ children, name, ...props }: FieldProps) => {
  if (undefined === name) {
    return <Container {...props}>{children}</Container>
  }

  const inputId = `${name}Input`

  return (
    <Container {...props}>
      {Children.map(children, (child) => {
        if (isLabelComponent(child)) {
          return cloneElement(child, { htmlFor: inputId })
        }

        if (isInputComponent(child)) {
          return cloneElement(child, { id: inputId, name })
        }

        return child
      })}
    </Container>
  )
}

export { Field }
