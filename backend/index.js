import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import authRouter from "./routes/auth.js"

const app = express()
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter)

connectDb();

app.listen(process.env.PORT, () => {
    console.log(`rodando na porta ${process.env.PORT}`);
})

