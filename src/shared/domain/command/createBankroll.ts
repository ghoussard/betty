import {
  ObjectConstraints,
  ObjectViolation,
  NotBlankConstraint,
  RequiredConstraint,
  TypeConstraint,
  UuidConstraint,
  GreaterThanOrEqualConstraint,
  validateObject,
} from '../validation'

type CreateBankrollCommand = {
  uuid: string
  name: string
  initialCapital: number
  currency: string
}

const constraints: ObjectConstraints<CreateBankrollCommand> = {
  uuid: [
    new RequiredConstraint(),
    new TypeConstraint('string'),
    new UuidConstraint(),
  ],
  name: [
    new RequiredConstraint(),
    new TypeConstraint('string'),
    new NotBlankConstraint(),
  ],
  initialCapital: [
    new RequiredConstraint(),
    new TypeConstraint('number'),
    new GreaterThanOrEqualConstraint(1),
  ],
  currency: [
    new RequiredConstraint(),
    new TypeConstraint('string'),
    new NotBlankConstraint(),
  ],
}

const validateCreateBankrollCommand = (
  command: CreateBankrollCommand
): ObjectViolation<CreateBankrollCommand>[] =>
  validateObject(command, constraints)

export type { CreateBankrollCommand }
export { validateCreateBankrollCommand }
