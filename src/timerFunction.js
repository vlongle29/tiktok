import { useEffect, useState } from "react";

function Timer() {
    const [countDown, setCountDown] = useState(180);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDown((prevState) => prevState - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    );
}

export default Timer;

