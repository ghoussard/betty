import { EventEmitter } from 'events'

class NotificationEventEmitter extends EventEmitter {}

const eventEmitter = new NotificationEventEmitter()

const NOTIFICATION_EMITTED_EVENT = 'NOTIFICATION_EMITTED'

export { eventEmitter, NOTIFICATION_EMITTED_EVENT }
