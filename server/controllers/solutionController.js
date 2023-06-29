import { SolutionModel } from "../models/solutionModel.js";

//sending solution
const sendSolution = async (req, res) => {
    try {
        //req.body -> json in format of schema
        const solutionBody = req.body;
        const solution = await SolutionModel.create(solutionBody);
        return res.status(200).json({ solution });
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: err.message });
    }

};

//getting all solutions for a problem from a user
const gettAllSolForProblemForUser = async (req, res) => {
    try {
        const { problemId, userId } = req.params;
        const solution = await SolutionModel.find({ problem: problemId, submittedBy: userId });
        return res.status(200).json({ solution });
    }
    catch(err)
    {
        console.log(err.message);
        return res.status(500).json({ error: err.message });
    }
};


export {sendSolution , gettAllSolForProblemForUser};