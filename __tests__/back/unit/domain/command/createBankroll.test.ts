import { validateCreateBankrollCommand } from '@/back/domain/command/createBankroll'

describe('Create bankroll command', () => {
  test('it validates valid bankroll command', () => {
    expect(
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: 'My bankroll',
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([])
  })

  test('it unvalidates bankroll command with unvalid uuid', () => {
    expect(
      // @ts-expect-error
      validateCreateBankrollCommand({
        name: 'My bankroll',
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'uuid',
        reason: 'This value is required',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        // @ts-expect-error
        uuid: 1,
        name: 'My bankroll',
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'uuid',
        reason: 'This value must be of type string',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: '',
        name: 'My bankroll',
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'uuid',
        reason: 'This value must be an uuid',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: 'invalid',
        name: 'My bankroll',
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'uuid',
        reason: 'This value must be an uuid',
      },
    ])
  })

  test('it unvalidates bankroll command with unvalid name', () => {
    expect(
      // @ts-expect-error
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'name',
        reason: 'This value is required',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        // @ts-expect-error
        name: 1,
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'name',
        reason: 'This value must be of type string',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: '',
        initialCapital: 100,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'name',
        reason: 'This value must be filled',
      },
    ])
  })

  test('it unvalidates bankroll command with unvalid name', () => {
    expect(
      // @ts-expect-error
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: 'My bankroll',
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'initialCapital',
        reason: 'This value is required',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: 'My bankroll',
        // @ts-expect-error
        initialCapital: '100',
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'initialCapital',
        reason: 'This value must be of type number',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: 'My bankroll',
        initialCapital: 0,
        currency: 'EUR',
      })
    ).toStrictEqual([
      {
        property: 'initialCapital',
        reason: 'This value must be greater than or equal 1',
      },
    ])
  })

  test('it unvalidates bankroll command with unvalid currency', () => {
    expect(
      // @ts-expect-error
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: 'My bankroll',
        initialCapital: 100,
      })
    ).toStrictEqual([
      {
        property: 'currency',
        reason: 'This value is required',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: 'My bankroll',
        initialCapital: 100,
        // @ts-expect-error
        currency: 1,
      })
    ).toStrictEqual([
      {
        property: 'currency',
        reason: 'This value must be of type string',
      },
    ])

    expect(
      validateCreateBankrollCommand({
        uuid: '1121d906-2e04-4b6d-825f-519a72b1c206',
        name: 'My bankroll',
        initialCapital: 100,
        currency: '',
      })
    ).toStrictEqual([
      {
        property: 'currency',
        reason: 'This value must be filled',
      },
    ])
  })
})
