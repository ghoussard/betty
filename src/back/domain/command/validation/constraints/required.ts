import { Constraint, ValidationResult } from './common'
class RequiredConstraint implements Constraint {
  public validate(value: unknown): ValidationResult {
    if (undefined === value) {
      return { validated: false, violationReason: 'This value is required' }
    }

    return { validated: true }
  }
}

export { RequiredConstraint }
