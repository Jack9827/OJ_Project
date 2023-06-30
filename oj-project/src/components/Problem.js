import React from 'react';
import { useLocation } from 'react-router-dom';
import './problem.css';

const Problem = () => {
  const location = useLocation();
  const problem = location.state?.problem;

  if (!problem) {
    // Handle the case when problem object is not available
    return <p>Error: Problem not found</p>;
  }

  // Access the problem statement and other properties
  const { title, statement, example } = problem;

  return (
    <div className="problem-container">
      <div className="problem-content">
        <h1 className="problem-title">{title}</h1>
        <p className="problem-statement">{statement}</p>

        <h2 className="example-title">Example Test Cases</h2>
        {example.map((testCase, index) => (
          <div key={index} className="example-case">
            <h3>Input:</h3>
            <pre>{testCase.input}</pre>
            <h3>Output:</h3>
            <pre>{testCase.output}</pre>
          </div>
        ))}
      </div>

      <div className="compiler-container">
        {/* Right side for the compiler */}
        {/* Add your compiler component here */}
      </div>
    </div>
  );
};

export default Problem;
