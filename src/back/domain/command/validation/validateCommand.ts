import { Constraint, ValidationResult } from './constraints'

const validateValue = (
  constraint: Constraint,
  value: unknown
): ValidationResult => constraint.validate(value)

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
      const validationResult = validateValue(constraint, command[property])

      if (!validationResult.validated) {
        violations.push({
          property,
          reason: validationResult.violationReason,
        })
        break
      }
    }
  }

  return violations
}

export type { CommandConstraints, CommandViolation }
export { validateCommand }
