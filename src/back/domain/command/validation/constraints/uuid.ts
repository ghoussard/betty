import { Constraint, UnexpectedConstraintError, Validate } from './common'

const UUID_CONSTRAINT_NAME = 'uuid'
class UuidConstraint extends Constraint {
  constructor() {
    super(UUID_CONSTRAINT_NAME)
  }

  public get violationReason(): string {
    return 'This value is not a valid uuid'
  }
}

const UUID_PATTERN =
  /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

const validateUuid: Validate = (
  constraint: Constraint,
  uuid: unknown
): string | null => {
  if (!(constraint instanceof UuidConstraint)) {
    throw new UnexpectedConstraintError()
  }

  if ('string' !== typeof uuid || !UUID_PATTERN.test(uuid)) {
    return constraint.violationReason
  }

  return null
}

export { UUID_CONSTRAINT_NAME, UuidConstraint, validateUuid }
