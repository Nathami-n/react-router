import React, { useEffect, useState, useCallback } from 'react'

const Trial = () => {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState(0);

    const [num1] = useState(4);
    const [num2] = useState(5);

    const sum = useCallback(() => num1 + num2, [num1, num2]);

    useEffect(()=> {
        console.log(`New sum: ${sum()}`);
        setResult(sum());
    }, [sum])
  return (
    <div>
        <input type="text" 
        value={userInput}
        onChange={(e)=>{
            setUserInput(e.target.value);
        }}
        />
        <h1>Output: {userInput || '--'}</h1>
    </div>
  )
}

export default Trial