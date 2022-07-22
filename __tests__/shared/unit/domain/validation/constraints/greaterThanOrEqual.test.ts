import { ValidationResult } from '@/shared/domain'
import { GreaterThanOrEqualConstraint } from '@/shared/domain/validation/constraints/greaterThanOrEqual'

const constraint = new GreaterThanOrEqualConstraint(1)
const validatedResult: ValidationResult = { validated: true }
const unvalidatedResult: ValidationResult = {
  validated: false,
  violationReason: 'This value must be greater than or equal 1',
}

describe('Greater than or equal constraint', () => {
  test('it validates value greater than or equal 1', () => {
    expect(constraint.validate(1)).toStrictEqual(validatedResult)
    expect(constraint.validate(99)).toStrictEqual(validatedResult)
  })

  test('it validates non number value', () => {
    expect(constraint.validate('test')).toStrictEqual(validatedResult)
    expect(constraint.validate(null)).toStrictEqual(validatedResult)
  })

  test('it validates value lower than 1', () => {
    expect(constraint.validate(0)).toStrictEqual(unvalidatedResult)
  })
})
