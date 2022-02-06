import { useHelloWorld } from '@/front/hooks'

const HelloWorld = () => {
  const message = useHelloWorld()

  return <div>{message}</div>
}

export { HelloWorld }
