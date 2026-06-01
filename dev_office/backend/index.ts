import express from 'express';
import { usuarioRouter } from './routes/UsuarioRoutes';

const app = express();
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
  console.log(req)
  res.send("Hello world")
})

app.use(usuarioRouter)


app.listen(port, () => {
  console.log("Servidor ta de pé :p")
})