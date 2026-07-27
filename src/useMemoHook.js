// memo --> kí hiệu: export default memo + ( Tên component )
// Ví dụ: Trong trường hợp ta để một component (con) ở một component (cha), và sau đó ta sẽ cho setState thay đổi để re-render lại component
// memo sẽ dùng toán tử '===' để kiểm tra xem component con đó có giá trị thay đổi hay không, nếu không thì nó sẽ không re-render, nếu có thì nó sẽ re-render lại component(con)
// Chi tiết xem ở phần useCallback.js và phần memo.js

import { useState, useMemo, useRef } from "react";

function UseMemo() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const nameInputRef = useRef(null);

    const handleSubmit = () => {
        setProducts([...products, { name, price: +price }]);
        setName("");
        setPrice("");
        nameInputRef.current.focus();
    };

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price;
        }, 0);

        return result;
    }, [products]);

    return (
        <div>
            <input
                ref={nameInputRef}
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>                  
    );
}

export default UseMemo;





