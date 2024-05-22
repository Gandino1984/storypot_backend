import {Router} from "express";

const router = Router();


router.get("/", (req, res) => {
    res.json("Storypo API says hi!");
})


export default router;