import { Constraint, ValidationResult } from './common'

type ExpectedType = 'string' | 'number' | 'boolean'

class TypeConstraint implements Constraint {
  private _expectedType: ExpectedType

  constructor(expectedType: ExpectedType) {
    this._expectedType = expectedType
  }

  public validate(value: unknown): ValidationResult {
    if (this._expectedType !== typeof value) {
      return {
        validated: false,
        violationReason: `This value must be of type ${this._expectedType}`,
      }
    }

    return { validated: true }
  }
}

export { TypeConstraint }
