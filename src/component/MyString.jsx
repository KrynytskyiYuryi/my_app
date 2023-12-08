import React, { useState } from "react";
import MyInput from "./UI/Input/MyInput";

const MyString = () => {
    const [value, setValue] = useState("");
    
    return (
        <div>
            <h2>{value}</h2>
            <MyInput
            onChange={(e) => setValue(e.target.value)}
            type="text"
            value={value}
            ></MyInput>
        </div>
    )
}

export default MyString