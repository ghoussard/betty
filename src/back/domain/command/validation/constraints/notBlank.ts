import { Validate } from './common'

const NOT_BLANK = 'not_blank'
const NOT_BLANK_REASON = 'This value must be filled'

const validateNotBlank: Validate = (value: unknown): string | null => {
  if ('string' !== typeof value) {
    return null
  }

  if (0 === value.length) {
    return NOT_BLANK_REASON
  }

  return null
}

export { NOT_BLANK, validateNotBlank }
