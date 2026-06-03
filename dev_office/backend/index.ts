import "dotenv/config";
import express from 'express';
import cors from "cors";
import { tests } from "./utils/test";

import { usuarioRouter } from './routes/UsuarioRoutes';
import tarefaRouter from './routes/TarefaRoutes';

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.post('/api/execute', async (req, res) => {
  const {
    tarefaId,
    funcaoEsperada,
    code,
  } = req.body;

  try {
    const fn = new Function(`
      ${code}
      return ${funcaoEsperada};
    `);

    const userFunction = fn();

    const casos = tests[funcaoEsperada];

    if (!casos) {
      return res.status(400).json({
        success: false,
        output: 'Função não cadastrada.'
      });
    }

    for (const teste of casos) {
      const resultado = userFunction(...teste.input);

      if (resultado !== teste.expected) {
        return res.json({
          success: false,
          output: `❌ Falhou\nEsperado: ${teste.expected}\nRecebido: ${resultado}`
        });
      }
    }

    return res.json({
      success: true,
      output: '✅ Todos os testes passaram!'
    });

  } catch (error) {
    return res.json({
      success: false,
      output: String(error)
    });
  }
});

// app.use(usuarioRouter);
app.use('/tarefas', tarefaRouter);

app.listen(port, () => {
  console.log("Servidor ta de pé :p");
});