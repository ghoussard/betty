import { useState, useEffect } from 'react'

const useHelloWorld = () => {
  const [helloWorld, setHelloWorld] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => setHelloWorld(res.message))
  }, [])

  return helloWorld
}

export { useHelloWorld }
