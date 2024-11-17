import express, { Request, Response } from 'express';
import pool from './config/database';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      res.json({ message: 'Conexão bem-sucedida!', data: result.rows });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao conectar ao banco de dados', error });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});