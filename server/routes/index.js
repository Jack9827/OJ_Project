import express from "express";

import authRoutes from "./authRoutes.js";
import problemRoutes from "./problemRoutes.js";
import solutionRoutes from "./solutionRoutes.js";

const router = express.Router();



router.use("/auth", authRoutes);

router.use("/problem" , problemRoutes);

router.use("/solutions" , solutionRoutes);


export default router;