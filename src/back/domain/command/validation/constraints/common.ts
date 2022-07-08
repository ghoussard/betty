type ValidationResult =
  | {
      validated: true
    }
  | {
      validated: false
      violationReason: string
    }

interface Constraint {
  validate(value: unknown): ValidationResult
}

export type { Constraint, ValidationResult }
