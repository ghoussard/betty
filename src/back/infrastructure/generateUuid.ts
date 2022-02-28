import { v4 as uuid } from 'uuid'
import { GenerateUuid } from '@/back/application'

const generateUuid: GenerateUuid = (): string => uuid()

export { generateUuid }
