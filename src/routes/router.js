import {Router} from "express";

import userRouter from "./userRouter.js";

const router = Router();

router.get("/", (req, res) => {
    res.json("Storypot API says hi!");
})

router.use("/users", userRouter);

export default router;