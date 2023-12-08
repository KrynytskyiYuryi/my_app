import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";

const MyCounter = () => {
    const [count, setCount] = useState(0);

    const increm = () => {
        setCount(count + 1);
    };
    const decrem = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <MyButton onClick={increm}>increment</MyButton>
            <MyButton onClick={decrem}>decremrnt</MyButton>
        </div>
    )
}

export default MyCounter