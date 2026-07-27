import { memo } from "react";

function Content({ onIncrease }) {
    console.log("re-render");

    return (
        <div>
            <h1>Test</h1>
            <button onClick={onIncrease}>Click me!</button>
        </div>
    );
    // Ở đây props onIncrease được gán bằng handleIncrease, và handleIncrease sau mỗi lần
    // click thì nó đã được thay đổi địa chỉ tham chiếu, và sau đó memo nhận thấy sự thay đổi đó bằng
    // toán tử '===' và nó sẽ re-render component này bình thường. Còn trường hợp không thấy sự thay đổi
    // thì nó sẽ tránh re-render lại từ component cha
}

export default memo(Content);
// memo sẽ dùng toán tử '===' để kiểm tra xem component
// Content có giá trị thay đổi hay không, nếu không thì nó
// sẽ không re-render, nếu có thì nó sẽ re-render lại Content
