import { Constraint, UnexpectedConstraintError, Validate } from './common'

const REQUIRED_CONSTRAINT_NAME = 'required'

class RequiredConstraint extends Constraint {
  constructor() {
    super(REQUIRED_CONSTRAINT_NAME)
  }

  public get violationReason(): string {
    return 'This value is required'
  }
}

const validateRequired: Validate = (
  constraint: Constraint,
  value: unknown
): string | null => {
  if (!(constraint instanceof RequiredConstraint)) {
    throw new UnexpectedConstraintError()
  }

  if (undefined === value) {
    return constraint.violationReason
  }

  return null
}

export { REQUIRED_CONSTRAINT_NAME, RequiredConstraint, validateRequired }
