import { initTRPC } from '@trpc/server'
import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import { z } from 'zod'

const app = express()
const PORT = 3000

app.use(cors())

const t = initTRPC.context().create()

const appRouter = t.router({
  helloWorld: t.procedure.query(() => {
    return 'Hello World!'
  }),
  helloName: t.procedure
    .input(z.object({ name: z.string(), age: z.number() }))
    .query(({ input }) => {
      return {
        greting: `Hello World ${input.name}`,
        age: input.age,
      }
    }),
})

app.get('/', (req, res) => res.send('hello'))

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
)

app.listen(PORT, () => console.log(`Sample app listening on port ${PORT}!`))

export type AppRouter = typeof appRouter
