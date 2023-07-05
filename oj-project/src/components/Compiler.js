import axios from 'axios';
import React, { useState } from 'react';
import "./compiler.css"
const Compiler = ({ _id }) => {
    // State for input values
    const [language, setLanguage] = useState('cpp');
    const [code, setCode] = useState('');
    const [compilerOutput, setCompilerOutput] = useState('');

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const solution = {
            code: code,
            language: language
        };
        const token = localStorage.getItem("jwt"); // Retrieve the JWT from local storage
        try {
            console.log("compiler " + token);
            const response = await axios.post(
                `http://localhost:4000/OJ/solutions/submit/${_id}`,
                solution,
            );
            // Handle the response
            // ...
            console.log(response.data.solution.verdict);
            alert(response.data.solution.verdict);
        } catch (error) {
            console.log(error.message);
        }
    };

    // Function to handle compiler output
    const handleCompilerOutput = (output) => {
        setCompilerOutput(output);
    };

    return (
        <div className="compiler-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Language:</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        {/* Include the available language options */}
                        <option value="cpp">C++</option>
                        <option value="python">Python</option>
                        {/* Add more language options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label>Code:</label>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        rows={30}
                        cols={50}
                        className='codeArea'
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <div className="compiler-output">
                <h3>Compiler Output:</h3>
                <pre>{compilerOutput}</pre>
            </div>
        </div>
    );
};

export default Compiler;
