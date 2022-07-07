import {
  REQUIRED,
  UUID,
  validateRequired,
  validateUuid,
  Validate,
  NOT_BLANK,
  validateNotBlank,
} from './constraints'

const CONSTRAINTS = [REQUIRED, UUID, NOT_BLANK] as const

type Constraint = typeof CONSTRAINTS[number]

type ConstraintMapping = {
  [constraint in Constraint]: Validate
}

const CONSTRAINT_MAPPING: ConstraintMapping = {
  [REQUIRED]: validateRequired,
  [UUID]: validateUuid,
  [NOT_BLANK]: validateNotBlank,
}

const validateValue = (constraint: Constraint, value: unknown): string | null =>
  CONSTRAINT_MAPPING[constraint](value)

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
