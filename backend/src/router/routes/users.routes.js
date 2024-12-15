import { Router } from 'express';
import { verifyToken } from '../../middelwares/authMiddelware.js';
import { getProfileInfos } from '../../controllers/users.controller.js';

const router = Router();

router.get('/profile', verifyToken, getProfileInfos);

export default router;