import {Router} from "express";

import userApiController from "../controllers/userApiController.js";

const router = Router();

router.get("/", userApiController.getAll);
router.get("/byproperty", userApiController.getByProperty);
router.get("/:id", userApiController.getById);
router.post("/", userApiController.create);
router.put("/:id", userApiController.update);
router.delete("/:id", userApiController.remove);

export default router;



