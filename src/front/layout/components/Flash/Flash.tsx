import { Notification } from '@/front/shared'

type FlashProps = {
  messages: Notification[]
}

const Flash = ({ messages }: FlashProps) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
    </div>
  )
}

export { Flash }
