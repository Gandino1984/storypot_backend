import {Router} from "express";

import userRouter from "./userRouter.js";

import projectRouter from "./projectRouter.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({message: "Storypot API endpoint"});
})

router.use("/users", userRouter);

router.use("/projects", projectRouter);

export default router;