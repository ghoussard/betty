import {
  REQUIRED_CONSTRAINT_NAME,
  UUID_CONSTRAINT_NAME,
  validateRequired,
  validateUuid,
  Validate,
  NOT_BLANK_CONSTRAINT_NAME,
  validateNotBlank,
  Constraint,
} from './constraints'

const CONSTRAINT_NAMES = [
  REQUIRED_CONSTRAINT_NAME,
  UUID_CONSTRAINT_NAME,
  NOT_BLANK_CONSTRAINT_NAME,
]

type ConstraintName = typeof CONSTRAINT_NAMES[number]

type ConstraintMapping = {
  [constraint in ConstraintName]: Validate
}

const CONSTRAINT_MAPPING: ConstraintMapping = {
  [REQUIRED_CONSTRAINT_NAME]: validateRequired,
  [UUID_CONSTRAINT_NAME]: validateUuid,
  [NOT_BLANK_CONSTRAINT_NAME]: validateNotBlank,
}

const isValidConstraintName = (
  constraintName: string
): constraintName is ConstraintName => CONSTRAINT_NAMES.includes(constraintName)

class UnhandledConstraintError extends Error {}

const validateValue = (
  constraint: Constraint,
  value: unknown
): string | null => {
  if (!isValidConstraintName(constraint.name)) {
    throw new UnhandledConstraintError()
  }

  return CONSTRAINT_MAPPING[constraint.name](constraint, value)
}

type CommandProperty<C> = keyof C

type CommandConstraints<C> = {
  [property in CommandProperty<C>]: Constraint[]
}

type CommandViolation<C> = {
  property: CommandProperty<C>
  reason: string
}

const validateCommand = <C>(
  command: C,
  constraints: CommandConstraints<C>
): CommandViolation<C>[] => {
  const violations: CommandViolation<C>[] = []

  for (const property in constraints) {
    const propertyConstraints = constraints[property]
    for (const constraint of propertyConstraints) {
      const violationReason = validateValue(constraint, command[property])

      if (null !== violationReason) {
        violations.push({
          property,
          reason: violationReason,
        })
        break
      }
    }
  }

  return violations
}

export type { CommandConstraints, CommandViolation }
export { validateCommand }
