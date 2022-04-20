import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  Override,
  Notification as NotificationModel,
  useTimeout,
} from '@/front/shared'

const NOTIFICATION_DURATION = 2000

const Container = styled.div`
  border: 1px solid black;
  padding: 1rem;
  background-color: white;
`

type NotificationProps = Override<
  HTMLAttributes<HTMLDivElement>,
  {
    notification: NotificationModel
    onRemove: () => void
  }
>

const Notification = ({ notification, onRemove }: NotificationProps) => {
  useTimeout(onRemove, NOTIFICATION_DURATION)

  return (
    <Container>
      {notification.content}
      <button onClick={onRemove}>Remove</button>
    </Container>
  )
}

export { Notification }
