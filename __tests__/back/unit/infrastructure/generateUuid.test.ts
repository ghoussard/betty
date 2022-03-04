import { generateUuid } from '@/back/infrastructure'

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('an_uuid'),
}))

describe('generate uuid', () => {
  test('it generates an uuid', () => {
    const uuid = generateUuid()

    expect(uuid).toEqual('an_uuid')
  })
})
