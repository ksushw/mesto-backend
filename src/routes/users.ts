import { Router } from 'express';
import {
  createUser, findUser, readUsers, refreshUser, refreshAvatar,
} from '../constrollers/user';

const router = Router();

router.post('/', createUser);
router.get('/:userId', findUser);
router.get('/', readUsers);
router.patch('/me', refreshUser);
router.patch('/me/avatar', refreshAvatar);

export default router;
