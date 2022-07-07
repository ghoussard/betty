import {
  CommandConstraints,
  CommandViolation,
  NOT_BLANK,
  REQUIRED,
  UUID,
  validateCommand,
} from './validation'

type CreateBankrollCommand = {
  uuid: string
  name: string
  initialCapital: number
  currency: string
}

const constraints: CommandConstraints<CreateBankrollCommand> = {
  uuid: [REQUIRED, UUID],
  name: [REQUIRED, NOT_BLANK],
  initialCapital: [REQUIRED],
  currency: [REQUIRED],
}

const validateCreateBankrollCommand = (
  command: CreateBankrollCommand
): CommandViolation<CreateBankrollCommand>[] =>
  validateCommand(command, constraints)

export type { CreateBankrollCommand }
export { validateCreateBankrollCommand }
