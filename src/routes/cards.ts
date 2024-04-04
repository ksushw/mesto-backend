import { Router } from 'express';
import {
  createCard, deleteCard, readCards, likeCard, dislikeCard,
} from '../constrollers/card';

const router = Router();

router.post('/', createCard);
router.get('/:cardId', deleteCard);
router.get('/', readCards);
router.put('cards/:cardId/likes', likeCard);
router.delete('cards/:cardId/likes', dislikeCard);

export default router;
