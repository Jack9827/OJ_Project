import express from "express";

import {sendSolution , gettAllSolForProblemForUser} from "../controllers/solutionController.js"

const router = express.Router();

router.post("/add" , sendSolution);
router.get("/get/:problemId/:userId" , gettAllSolForProblemForUser);

export default router;