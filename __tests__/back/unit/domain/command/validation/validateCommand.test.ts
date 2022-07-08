import {
  validateCommand,
  RequiredConstraint,
  UuidConstraint,
  CommandConstraints,
} from '@/back/domain/command/validation'

type DummyCommand = {
  uuid: string
  name: string
  phone: string
}

const dummyCommandConstraints: CommandConstraints<DummyCommand> = {
  uuid: [new RequiredConstraint(), new UuidConstraint()],
  name: [new RequiredConstraint()],
  phone: [],
}

describe('validate command', () => {
  test('it returns an empty array when command is valided', () => {
    expect(
      validateCommand(
        {
          uuid: '294bf65a-dfaf-4830-be0d-a44aa8220689',
          name: 'A name',
          phone: '',
        },
        dummyCommandConstraints
      )
    ).toStrictEqual([])

    expect(
      validateCommand(
        // @ts-expect-error
        {
          uuid: '294bf65a-dfaf-4830-be0d-a44aa8220689',
          name: 'A name',
        },
        dummyCommandConstraints
      )
    ).toStrictEqual([])
  })

  test('it returns violations when command is invalided', () => {
    expect(
      validateCommand(
        // @ts-expect-error
        {
          phone: '',
        },
        dummyCommandConstraints
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
      validateCommand(
        // @ts-expect-error
        {
          uuid: 'an-invalid-uuid',
          phone: '',
        },
        dummyCommandConstraints
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
