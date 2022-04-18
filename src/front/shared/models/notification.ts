type NotificationLevel = 'success' | 'info' | 'warning' | 'error'

type Notification = {
  level: NotificationLevel
  content: string
}

export type { Notification }
