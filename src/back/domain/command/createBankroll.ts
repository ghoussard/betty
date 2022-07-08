import {
  CommandConstraints,
  CommandViolation,
  NotBlankConstraint,
  RequiredConstraint,
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
  uuid: [new RequiredConstraint(), new UuidConstraint()],
  name: [new RequiredConstraint(), new NotBlankConstraint()],
  initialCapital: [
    new RequiredConstraint(),
    new GreaterThanOrEqualConstraint(1),
  ],
  currency: [new RequiredConstraint()],
}

const validateCreateBankrollCommand = (
  command: CreateBankrollCommand
): CommandViolation<CreateBankrollCommand>[] =>
  validateCommand(command, constraints)

export type { CreateBankrollCommand }
export { validateCreateBankrollCommand }
