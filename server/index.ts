import { initTRPC } from "@trpc/server"
import express from "express"
import * as trpcExpress from '@trpc/server/adapters/express'

const app = express()
const PORT = 3000

const t = initTRPC.create()

const appRouter = t.router({
  'hello-world': t.procedure.query(() => {
    return 'Hello World!'
  })
})

app.get('/', (req, res) => res.send('hello'))

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter
  })
)

app.listen(PORT, () => console.log(`Sample app listening on port ${PORT}!`))

export type AppRouter = typeof appRouter