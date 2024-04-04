import express, { Request, Response } from 'express';

import mongoose from 'mongoose';
import userRouter from './routes/users';
import cartRouter from './routes/cards';

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mydb');

app.use(express.json());

app.use('/user', userRouter);
app.use('/carts', cartRouter);

app.use((req: any, res: Response, next) => {
  req.user = {
    _id: '660da2292fd773bde465fdd0',
  };

  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send(
    `<html>
    <body>
        <p>Ответ на сигнал из далёкого космоса</p>
    </body>
    </html>`,
  );
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
