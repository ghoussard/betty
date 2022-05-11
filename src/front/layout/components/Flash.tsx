import { HTMLAttributes, ReactText } from 'react'
import styled from 'styled-components'
import { Override, NotificationLevel, useTimeout, colors } from '@/front/shared'

const NOTIFICATION_DURATION = 5000

const getColorForLevel = (level: NotificationLevel): string => {
  switch (level) {
    case 'success':
      return colors.lightgreen
    case 'info':
      return colors.blue
    case 'warning':
      return colors.orange
    case 'error':
      return colors.red
    default:
      throw new Error(`Unknown notification level: ${level}`)
  }
}

const Container = styled.div<{ level: NotificationLevel }>`
  border: 1px solid ${({ level }) => getColorForLevel(level)};
  border-radius: 0.25rem;
  box-shadow: 0 0 1px ${({ level }) => getColorForLevel(level)};
  padding: 1rem;
  background-color: white;
  position: relative;
  color: ${({ level }) => getColorForLevel(level)};
`

const CloseIcon = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`

type FlashProps = Override<
  HTMLAttributes<HTMLDivElement>,
  {
    children: ReactText
    level: NotificationLevel
    onClose: () => void
  }
>

const Flash = ({ children, onClose, ...props }: FlashProps) => {
  useTimeout(onClose, NOTIFICATION_DURATION)

  return (
    <Container {...props}>
      {children}
      <CloseIcon onClick={onClose}>X</CloseIcon>
    </Container>
  )
}

export { Flash }
