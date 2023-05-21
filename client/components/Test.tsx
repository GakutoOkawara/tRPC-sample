import React from "react"
import { trpc } from "../src/utils/trpc"

const Test = () => {
  const helloWorld = trpc["hello-world"].useQuery()
  console.log(helloWorld)
  return <div>{helloWorld.data}</div>
}

export default Test