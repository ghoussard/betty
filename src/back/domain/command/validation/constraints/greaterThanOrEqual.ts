import { Constraint, ValidationResult } from './common'

class GreaterThanOrEqualConstraint implements Constraint {
  private _min: number

  constructor(min: number) {
    this._min = min
  }

  public validate(value: unknown): ValidationResult {
    if ('number' === typeof value && this._min > value) {
      return {
        validated: false,
        violationReason: `This value must be greater than or equal ${this._min}`,
      }
    }

    return { validated: true }
  }
}

export { GreaterThanOrEqualConstraint }
