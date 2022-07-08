import { Constraint, ValidationResult } from './common'

class NotBlankConstraint implements Constraint {
  validate(value: unknown): ValidationResult {
    if ('string' === typeof value && 0 === value.length) {
      return {
        validated: false,
        violationReason: 'This value must be filled',
      }
    }

    return { validated: true }
  }
}

export { NotBlankConstraint }
