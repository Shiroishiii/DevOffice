import "dotenv/config";
import express from 'express';
import { usuarioRouter } from './routes/UsuarioRoutes';
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
  console.log(req)
  res.send("Hello world")
})

app.post('/api/execute', async (req, res) => {
  const { code } = req.body

  try {
    const logs: string[] = []

    const consoleMock = {
      log: (...args: unknown[]) => {
        logs.push(args.join(' '))
      },
    }

    const fn = new Function('console', code)

    fn(consoleMock)

    res.json({
      output: logs.join('\n'),
    })
  } catch (error) {
    res.json({
      output: String(error),
    })
  }
})

app.use(usuarioRouter)


app.listen(port, () => {
  console.log("Servidor ta de pé :p")
})