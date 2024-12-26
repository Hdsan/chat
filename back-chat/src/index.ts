import express from 'express';
import messagesRoutes from './routes/messages.routes';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())
app.use('/messages', messagesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em na porta ${PORT}`);
}); 