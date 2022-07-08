import { ValidationResult } from '@/back/domain'
import { UuidConstraint } from '@/back/domain/command/validation/constraints/uuid'

const constraint = new UuidConstraint()
const validatedResult: ValidationResult = { validated: true }
const unvalidatedResult: ValidationResult = {
  validated: false,
  violationReason: 'This value must be an uuid',
}

describe('Uuid constraint', () => {
  test('it validates uuid v4', () => {
    expect(
      constraint.validate('38b1ccfd-0de6-44b9-ba63-e993298b4d35')
    ).toStrictEqual(validatedResult)
  })

  test('it validates non string value', () => {
    expect(constraint.validate(1)).toStrictEqual(validatedResult)
    expect(constraint.validate(null)).toStrictEqual(validatedResult)
  })

  test('it invalidates uuid v1 value', () => {
    expect(
      constraint.validate('585570ba-feb7-11ec-b939-0242ac120002')
    ).toStrictEqual(unvalidatedResult)
  })
})
