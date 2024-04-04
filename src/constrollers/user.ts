import { Request, Response } from 'express';
import User from '../models/users';

const createUser = (req: Request, res: Response) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err._message.includes('validation')) {
        return res.status(400).send({ message: 'Переданы некорректные данные при создании пользователя' });
      }
      return res.status(500).send({ message: `Произошла ошибка ${err}` });
    });
};

const readUsers = (req: Request, res: Response) => User.find({})
  .then((user) => res.send({ data: user }))
  .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));

const findUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  User.find({ _id: { $eq: userId } })
    .then((user) => {
      if (user.length === 0) {
        return res.status(404).send({ message: 'Пользователь по указанному _id не найден.' });
      }
      return res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const refreshUser = (req: any, res: Response) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(req.user._id, { name, about })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Пользователь с указанным _id не найден.' });
      }
      return res.send({ data: user });
    })
    .catch((err) => {
      if (err._message.includes('validation')) {
        return res.status(400).send({ message: 'Переданы некорректные данные при обновлении профиля.' });
      }
      return res.status(500).send({ message: `Произошла ошибка ${err}` });
    });
};

const refreshAvatar = (req: any, res: Response) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Пользователь с указанным _id не найден.' });
      }
      return res.send({ data: user });
    })
    .catch((err) => {
      if (err._message.includes('validation')) {
        return res.status(400).send({ message: 'Переданы некорректные данные при обновлении аватара.' });
      }
      return res.status(500).send({ message: `Произошла ошибка ${err}` });
    });
};

export {
  createUser, readUsers, findUser, refreshUser, refreshAvatar,
};
