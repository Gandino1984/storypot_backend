import {Router} from "express";

import userApiController from "../controllers/userApiController.js";

const router = Router();

router.get("/", userApiController.getAll);
router.get("/:id", userApiController.getById);
router.post("/", userApiController.create);
router.put("/:id", userApiController.update);
// router.delete("/:id", userApiController.remove);
//getByProperty?? 11:27 2024-05-21 Backend: Rutas para User y pruebas con Postman

export default router;



