import { EventEmitter } from 'events'

class NotificationEventEmitter extends EventEmitter {}

const eventEmitter = new NotificationEventEmitter()

const NOTIFICATION_EVENT = 'notification'

export { eventEmitter, NOTIFICATION_EVENT }
