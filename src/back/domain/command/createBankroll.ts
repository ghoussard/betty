import {
  CommandConstraints,
  CommandViolation,
  NotBlankConstraint,
  RequiredConstraint,
  TypeConstraint,
  UuidConstraint,
  GreaterThanOrEqualConstraint,
  validateCommand,
} from './validation'

type CreateBankrollCommand = {
  uuid: string
  name: string
  initialCapital: number
  currency: string
}

const constraints: CommandConstraints<CreateBankrollCommand> = {
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
  currency: [new RequiredConstraint(), new TypeConstraint('string')],
}

const validateCreateBankrollCommand = (
  command: CreateBankrollCommand
): CommandViolation<CreateBankrollCommand>[] =>
  validateCommand(command, constraints)

export type { CreateBankrollCommand }
export { validateCreateBankrollCommand }
