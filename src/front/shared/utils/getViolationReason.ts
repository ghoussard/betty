import { Violation } from '@/shared/domain'

const getViolationReason = <O>(
  violations: Violation<O>[],
  property: keyof O
): string | null =>
  violations.find((violation) => violation.property === property)?.reason ||
  null

export { getViolationReason }
