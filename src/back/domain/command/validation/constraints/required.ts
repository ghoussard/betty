import { Validate } from './common'

const REQUIRED = 'required'
const REQUIRED_REASON = 'This value is required'

const validateRequired: Validate = (value: unknown): string | null => {
  if (undefined === value) {
    return REQUIRED_REASON
  }

  return null
}

export { REQUIRED, validateRequired }
