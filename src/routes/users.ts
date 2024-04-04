import { Router } from 'express';
import { createUser, findUser, readUsers } from '../constrollers/user';

const router = Router();

router.post('/', createUser);
router.get('/:userId', findUser);
router.get('/', readUsers);

export default router;
