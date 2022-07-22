import { ValidationResult } from '@/shared/domain'
import { TypeConstraint } from '@/shared/domain/validation/constraints/type'

const stringConstraint = new TypeConstraint('string')
const numberConstraint = new TypeConstraint('number')
const booleanConstraint = new TypeConstraint('boolean')

const validatedResult: ValidationResult = { validated: true }
const getUnvalidatedResult = (type: string): ValidationResult => ({
  validated: false,
  violationReason: `This value must be of type ${type}`,
})

describe('Type constraint', () => {
  test('it validates well typed value', () => {
    expect(stringConstraint.validate('test')).toStrictEqual(validatedResult)
    expect(numberConstraint.validate(1)).toStrictEqual(validatedResult)
    expect(booleanConstraint.validate(true)).toStrictEqual(validatedResult)
  })

  test('it invalidates wrong typed value', () => {
    expect(stringConstraint.validate(1)).toStrictEqual(
      getUnvalidatedResult('string')
    )
    expect(numberConstraint.validate('test')).toStrictEqual(
      getUnvalidatedResult('number')
    )
    expect(booleanConstraint.validate(1)).toStrictEqual(
      getUnvalidatedResult('boolean')
    )
  })
})
