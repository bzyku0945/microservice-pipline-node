import { Router } from "express";
import { pollController } from "../controllers/poll.js";

const router = Router();

router.get("/polls", pollController.getAllPolls);

export default router;
