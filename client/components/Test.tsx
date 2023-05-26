import React from 'react'
import { trpc } from '../src/utils/trpc'

const Test = () => {
  const test = trpc.helloName.useQuery({ name: 'John', age: 10 })

  return <div>{test.data?.greting}</div>
}

export default Test
