import { Constraint, UnexpectedConstraintError, Validate } from './common'

const NOT_BLANK_CONSTRAINT_NAME = 'not_blank'

class NotBlankConstraint extends Constraint {
  constructor() {
    super(NOT_BLANK_CONSTRAINT_NAME)
  }

  public get violationReason(): string {
    return 'This value must be filled'
  }
}

const validateNotBlank: Validate = (
  constraint: Constraint,
  value: unknown
): string | null => {
  if (!(constraint instanceof NotBlankConstraint)) {
    throw new UnexpectedConstraintError()
  }

  if ('string' !== typeof value) {
    return null
  }

  if (0 === value.length) {
    return constraint.violationReason
  }

  return null
}

export { NOT_BLANK_CONSTRAINT_NAME, NotBlankConstraint, validateNotBlank }
