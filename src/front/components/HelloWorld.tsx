import { useHelloWorld } from '../hooks/useHelloWorld'

const HelloWorld = () => {
  const message = useHelloWorld()

  return <div>{message}</div>
}
export default HelloWorld
