import { Validate } from './common'

const UUID = 'uuid'
const UUID_REASON = 'This value is not a valid uuid'

const UUID_PATTERN =
  /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

const validateUuid: Validate = (uuid: unknown): string | null => {
  if ('string' !== typeof uuid || !UUID_PATTERN.test(uuid)) {
    return UUID_REASON
  }

  return null
}

export { UUID, validateUuid }
