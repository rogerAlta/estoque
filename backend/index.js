import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';

const app = express()
app.use(cors());
app.use(express.json());

connectDb();

app.listen(process.env.PORT, () => {
    console.log(`rodando na porta ${process.env.PORT}`);
})

