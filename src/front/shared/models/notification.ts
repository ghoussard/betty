type NotificationLevel = 'success' | 'info' | 'warning' | 'error'

type Notification = {
  level: NotificationLevel
  message: string
}

export type { Notification, NotificationLevel }
