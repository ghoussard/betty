import {
  validateCommand,
  REQUIRED,
  UUID,
  CommandConstraints,
} from '@/back/domain/command/validation'

type DummyCommand = {
  uuid: string
  name: string
  phone: string
}

const dummyCommandConstraints: CommandConstraints<DummyCommand> = {
  uuid: [REQUIRED, UUID],
  name: [REQUIRED],
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
        reason: 'This value is not a valid uuid',
      },
      {
        property: 'name',
        reason: 'This value is required',
      },
    ])
  })
})
