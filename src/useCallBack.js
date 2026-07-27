import { useState, useCallback } from "react";
import Content from "./memo.js";

function UseCallBack() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount((prevState) => prevState + 1);
    }, []);
// Ta có kiến thức như sau: Với mỗi function khi được tạo mới thì nó sẽ tham chiếu
// tới một địa chỉ khác nhau. Vậy nên 

// ==>

//  Khi useCallback được đặt ở đây tức là nó
//  đang tạo ra một function và nó tham chiếu function
//  đó ra bên ngoài component sau đó nó gán tham chiếu
//  đó cho biến handleIncrease
    return (
        <div>
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    );
}

export default UseCallBack;
