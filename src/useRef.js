import { useEffect, useRef, useState } from "react";

function Useref() {
    const [count, setCount] = useState(60);
    const timeOut = useRef();
    // Ở đây nếu ta chỉ để const timeOut thì mỗi khi component rerender lại thì timeOut nó sẽ là phạm vi mới vì thế nên khi ta clear đi thì nó sẽ chỉ là clear cái timeOut cũ nên sẽ ra undifined
    // Vậy nên ở đây ta đặt cho nó là useRef() và lấy ra timeOut.current là để chỉ tới giá trị hiện tại của nó
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);
    // useEffect() sẽ đưuọc gọi sau khi mount và giá tri của prevCount.current lúc này là 60 sau khi mount

    const handleStart = () => {
        if (!timeOut.current) {
            timeOut.current = setInterval(() => {
                // ở đây timeOut.current chỉ tới giá trị hiện tại nên khi component rerender lại thì timeOut vẫn là giá trị hiện tại, và khi ta clear timeOut.current thì nó clear đi giá trị hiện tại
                setCount((prevState) => prevState - 1);
            }, 1000);
        }
    };

    const handleStop = () => {
        clearInterval(timeOut.current);     
        timeOut.current = null;
    };

    console.log(count, prevCount.current);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>
    );
}

export default Useref;
