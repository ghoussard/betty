import { ValidationResult } from '@/back/domain'
import { NotBlankConstraint } from '@/back/domain/command/validation/constraints/notBlank'

const constraint = new NotBlankConstraint()
const validatedResult: ValidationResult = { validated: true }
const unvalidatedResult: ValidationResult = {
  validated: false,
  violationReason: 'This value must be filled',
}

describe('Not blank constraint', () => {
  test('it validates not blank value', () => {
    expect(constraint.validate('test')).toStrictEqual(validatedResult)
  })

  test('it validates non string value', () => {
    expect(constraint.validate(1)).toStrictEqual(validatedResult)
    expect(constraint.validate(null)).toStrictEqual(validatedResult)
  })

  test('it invalidates blank value', () => {
    expect(constraint.validate('')).toStrictEqual(unvalidatedResult)
  })
})
