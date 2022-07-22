import {
  RequiredConstraint,
  UuidConstraint,
  Constraints,
} from '@/shared/domain/validation'
import { validate } from '@/shared/domain/validation/validate'

type DummyObject = {
  uuid: string
  name: string
  phone: string
}

const dummyConstraints: Constraints<DummyObject> = {
  uuid: [new RequiredConstraint(), new UuidConstraint()],
  name: [new RequiredConstraint()],
  phone: [],
}

describe('validate object', () => {
  test('it returns an empty array when object is valided', () => {
    expect(
      validate(
        {
          uuid: '294bf65a-dfaf-4830-be0d-a44aa8220689',
          name: 'A name',
          phone: '',
        },
        dummyConstraints
      )
    ).toStrictEqual([])

    expect(
      validate(
        // @ts-expect-error
        {
          uuid: '294bf65a-dfaf-4830-be0d-a44aa8220689',
          name: 'A name',
        },
        dummyConstraints
      )
    ).toStrictEqual([])
  })

  test('it returns violations when object is invalided', () => {
    expect(
      validate(
        // @ts-expect-error
        {
          phone: '',
        },
        dummyConstraints
      )
    ).toStrictEqual([
      {
        property: 'uuid',
        reason: 'This value is required',
      },
      {
        property: 'name',
        reason: 'This value is required',
      },
    ])

    expect(
      validate(
        // @ts-expect-error
        {
          uuid: 'an-invalid-uuid',
          phone: '',
        },
        dummyConstraints
      )
    ).toStrictEqual([
      {
        property: 'uuid',
        reason: 'This value must be an uuid',
      },
      {
        property: 'name',
        reason: 'This value is required',
      },
    ])
  })
})
