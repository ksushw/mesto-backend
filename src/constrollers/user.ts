import { Request, Response } from 'express';
import User from '../models/users';

const createUser = (req: Request, res: Response) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const readUsers = (req: Request, res: Response) => User.find({})
  .then((user) => res.send({ data: user }))
  .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));

const findUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  User.find({ _id: { $eq: userId } })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

export { createUser, readUsers, findUser };
