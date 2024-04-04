import { Router } from 'express';
import { createCard, deleteCard, readCards } from '../constrollers/card';

const router = Router();

router.post('/', createCard);
router.get('/:cardId', deleteCard);
router.get('/', readCards);

export default router;
