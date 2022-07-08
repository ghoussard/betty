import { Constraint, UnexpectedConstraintError, Validate } from './common'

const GREATER_THAN_OR_EQUAL_CONSTRAINT_NAME = 'greater_than_or_equal'

class GreaterThanOrEqualConstraint extends Constraint {
  private _min: number

  constructor(min: number) {
    super(GREATER_THAN_OR_EQUAL_CONSTRAINT_NAME)
    this._min = min
  }

  public get min(): number {
    return this._min
  }

  public get violationReason(): string {
    return `This value must be greater or equal than ${this._min}`
  }
}

const validateGreaterThanOrEqual: Validate = (
  constraint: Constraint,
  value: unknown
): string | null => {
  if (!(constraint instanceof GreaterThanOrEqualConstraint)) {
    throw new UnexpectedConstraintError()
  }

  if ('number' !== typeof value) {
    return null
  }

  if (constraint.min > value) {
    return constraint.violationReason
  }

  return null
}

export {
  GREATER_THAN_OR_EQUAL_CONSTRAINT_NAME,
  GreaterThanOrEqualConstraint,
  validateGreaterThanOrEqual,
}
