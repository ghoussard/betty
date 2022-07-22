import {
  RequiredConstraint,
  UuidConstraint,
  ObjectConstraints,
} from '@/shared/domain/validation'
import { validateObject } from '@/shared/domain/validation/validateObject'

type DummyObject = {
  uuid: string
  name: string
  phone: string
}

const dummyObjectConstraints: ObjectConstraints<DummyObject> = {
  uuid: [new RequiredConstraint(), new UuidConstraint()],
  name: [new RequiredConstraint()],
  phone: [],
}

describe('validate object', () => {
  test('it returns an empty array when object is valided', () => {
    expect(
      validateObject(
        {
          uuid: '294bf65a-dfaf-4830-be0d-a44aa8220689',
          name: 'A name',
          phone: '',
        },
        dummyObjectConstraints
      )
    ).toStrictEqual([])

    expect(
      validateObject(
        // @ts-expect-error
        {
          uuid: '294bf65a-dfaf-4830-be0d-a44aa8220689',
          name: 'A name',
        },
        dummyObjectConstraints
      )
    ).toStrictEqual([])
  })

  test('it returns violations when object is invalided', () => {
    expect(
      validateObject(
        // @ts-expect-error
        {
          phone: '',
        },
        dummyObjectConstraints
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
      validateObject(
        // @ts-expect-error
        {
          uuid: 'an-invalid-uuid',
          phone: '',
        },
        dummyObjectConstraints
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
