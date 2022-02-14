import { useHelloWorld } from '@/front/hooks'

const HelloWorld = () => {
  const message = useHelloWorld()

  return <div className="text-3xl text-orange-500">{message}</div>
}

export { HelloWorld }
