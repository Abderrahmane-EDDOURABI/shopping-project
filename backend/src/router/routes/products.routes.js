import { Router } from 'express';
import { addProduct, getAllProducts, getOneProduct, removeProduct, updateProduct } from '../../controllers/products.controller.js';
import { verifyTokenAndAdmin } from '../../middelwares/authMiddelware.js';

const router = Router();

router.get('/', getAllProducts);
router.get("/", getOneProduct);

router.post('/', verifyTokenAndAdmin ,addProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, removeProduct);

export default router;