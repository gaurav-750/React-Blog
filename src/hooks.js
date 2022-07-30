import { useState } from "react";

const useFormInput = (initialValue) => {

    const[value, setValue] = useState(initialValue);

    function handleChange(e){
        console.log(e.target);
        
        setValue(e.target.value);
    }

    return {
        value,
        onChange : handleChange,
        setthevalue : setValue
    }
}

export default useFormInput;