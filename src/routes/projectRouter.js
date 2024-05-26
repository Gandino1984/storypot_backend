import {Router} from "express";

import projectApiController from "../controllers/projectApiController.js";

const router = Router();

router.get("/", projectApiController.getAll);
router.get("/byproperty", projectApiController.getByProperty);
router.get("/:id", projectApiController.getById);
router.post("/", projectApiController.create);
router.put("/:id/update", projectApiController.update);
router.delete("/:id", projectApiController.remove);
router.post("/:id/user", projectApiController.addUser);
router.delete("/:id/user", projectApiController.removeUser);


export default router;