import { Response } from 'express';
import Card from '../models/cards';

const createCard = (req: any, res: Response) => {
  const { name, link } = req.body;

  return Card.create({ name, link, owner: req.user._id })
    .then((cart) => res.send({ data: cart }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const deleteCard = (req: any, res: Response) => {
  const { cardId } = req.params;
  return Card.findByIdAndDelete(cardId)
    .then((cart) => res.send({ data: cart }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const readCards = (req: any, res: Response) => Card.find({})
  .then((cart) => res.send({ data: cart }))
  .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));

const likeCard = (req: any, res: Response) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((cart) => res.send({ data: cart }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const dislikeCard = (req: any, res: Response) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((cart) => res.send({ data: cart }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

export {
  createCard, deleteCard, readCards, likeCard, dislikeCard,
};
