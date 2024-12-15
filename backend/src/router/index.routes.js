import { Router } from "express";
import users_routes from '../router/routes/users.routes.js';
import auth_routes from '../router/routes/auth.routes.js';
import categories_routes from '../router/routes/categories.routes.js';
import products_routes from '../router/routes/products.routes.js';
import orders_routes from '../router/routes/orders.routes.js';

const router = Router();

router.use("/users", users_routes);
router.use("/auth", auth_routes);
router.use("/categories", categories_routes);
router.use("/products", products_routes);
router.use("/orders", orders_routes);

export default router;
