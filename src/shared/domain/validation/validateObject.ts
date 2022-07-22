import { Constraint, ValidationResult } from './constraints'

const validateProperty = (
  constraint: Constraint,
  value: unknown
): ValidationResult => constraint.validate(value)

type ObjectProperty<O> = keyof O

type ObjectConstraints<O> = {
  [property in ObjectProperty<O>]: Constraint[]
}

type ObjectViolation<O> = {
  property: ObjectProperty<O>
  reason: string
}

const validateObject = <O>(
  object: O,
  constraints: ObjectConstraints<O>
): ObjectViolation<O>[] => {
  const violations: ObjectViolation<O>[] = []

  for (const property in constraints) {
    const propertyConstraints = constraints[property]
    for (const constraint of propertyConstraints) {
      const validation = validateProperty(constraint, object[property])

      if (!validation.validated) {
        violations.push({
          property,
          reason: validation.violationReason,
        })
        break
      }
    }
  }

  return violations
}

export type { ObjectConstraints, ObjectViolation }
export { validateObject }
