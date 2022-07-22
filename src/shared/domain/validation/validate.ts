import { Constraint, ValidationResult } from './constraints'

const validateProperty = (
  constraint: Constraint,
  value: unknown
): ValidationResult => constraint.validate(value)

type Property<V> = keyof V

type Constraints<V> = {
  [property in Property<V>]: Constraint[]
}

type Violation<V> = {
  property: Property<V>
  reason: string
}

const validate = <V>(value: V, constraints: Constraints<V>): Violation<V>[] => {
  const violations: Violation<V>[] = []

  for (const property in constraints) {
    const propertyConstraints = constraints[property]
    for (const constraint of propertyConstraints) {
      const validation = validateProperty(constraint, value[property])

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

export type { Constraints, Violation }
export { validate }
