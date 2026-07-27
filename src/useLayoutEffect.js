import { useLayoutEffect, useState } from "react";

function UseLayoutEffect() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count === 4) {
            setCount(0);
        }
    }, [count]);

    const handleCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>count</button>
        </div>
    );
}

export default UseLayoutEffect;
