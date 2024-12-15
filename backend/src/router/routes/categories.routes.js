import { Router } from 'express';
import { addCategory, getAllCategories, getOneCategory, removeCategory, updateCategory } from '../../controllers/categories.controller.js';
import { verifyTokenAndAdmin } from '../../middelwares/authMiddelware.js';

const router = Router();

router.get('/', getAllCategories);
router.get('/:id', getOneCategory);

router.post("/", verifyTokenAndAdmin, addCategory);
router.put("/:id", verifyTokenAndAdmin, updateCategory);
router.delete("/:id", verifyTokenAndAdmin, removeCategory);

export default router;