abstract class Constraint {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  public get name(): string {
    return this._name
  }

  abstract get violationReason(): string
}

class UnexpectedConstraintError extends Error {}

type Validate = (constraint: Constraint, value: unknown) => string | null

export { Constraint, UnexpectedConstraintError }
export type { Validate }
