import express from 'express';
import { Request, Response, NextFunction } from 'express';
import toDoRoutes from './routes/toDoRoutes';
import { json } from 'body-parser';

const app = express();

app.use(json());
app.use('/todos', toDoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message })
})
app.listen(3000, () => {
    console.log("server running at port 3000");
})