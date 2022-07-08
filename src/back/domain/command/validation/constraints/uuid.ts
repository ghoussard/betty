import { Constraint, ValidationResult } from './common'
class UuidConstraint implements Constraint {
  private readonly _pattern: RegExp =
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

  public validate(value: unknown): ValidationResult {
    if ('string' === typeof value && !this._pattern.test(value)) {
      return {
        validated: false,
        violationReason: 'This value must be an uuid',
      }
    }

    return { validated: true }
  }
}

export { UuidConstraint }
