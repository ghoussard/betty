import { ValidationResult } from '@/back/domain'
import { RequiredConstraint } from '@/back/domain/command/validation/constraints/required'

const constraint = new RequiredConstraint()
const validatedResult: ValidationResult = { validated: true }
const unvalidatedResult: ValidationResult = {
  validated: false,
  violationReason: 'This value is required',
}

describe('Required constraint', () => {
  test('it validates defined value', () => {
    expect(constraint.validate('test')).toStrictEqual(validatedResult)
    expect(constraint.validate(1)).toStrictEqual(validatedResult)
  })

  test('it invalidates undefined value', () => {
    expect(constraint.validate(undefined)).toStrictEqual(unvalidatedResult)
  })
})
