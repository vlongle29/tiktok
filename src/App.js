import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { getByPlaceholderText } from "@testing-library/react";

function App() {
    // const [counter, setCounter] = useState(1);

    // const handleIncrease = () => {
    //     setCounter(counter + 1);
    // };

    // const handleIncrease = () => {
    //     setCounter((prevState) => prevState + 1);
    //     setCounter((prevState) => prevState + 1);
    //     setCounter((prevState) => prevState + 1);
    //     setCounter((prevState) => prevState + 1);

    // };

    // Function 1:
    const array = [100, 200, 300];

    const handleIncrease = () => {
        setCounter(counter + 1);
    };

    const [counter, setCounter] = useState(() => {
        const total = array.reduce((total, cur) => total + cur);
        return total;
    });

    // Function 2:
    const initialElement = {
        name: "Long",
        age: 20,
    };

    const [contents, setContents] = useState([initialElement]);

    const handleUpdate = () => {
        const newElement = {
            name: "xxx",
            age: 16,
            bio: "yeu mau hong",
        };
        setContents((prevContents) => [...prevContents, newElement]);
    };

    // Function 3:
    const gifts = ["javascript", "htmlcss", "reactjs"];

    const [gift, setGift] = useState();

    const handleRandom = () => {
        const index = Math.floor(Math.random() * 3);
        setGift(gifts[index]);
    };

    // Function 4
    const [name, setName] = useState("");

    console.log(name);

    // Function 5
    const [name1, setName1] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log({ name1, email });
    };

    // Function 6
    const listCourse = [
        {
            id: 1,
            name: "HTML,CSS",
        },

        {
            id: 2,
            name: "JAVASCRIPT",
        },

        {
            id: 3,
            name: "REACTJS",
        },
    ];

    const [checked, setChecked] = useState([]);

    const handleCheckIds = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handlerRegister = () => {
        console.log({ id: checked });
    };

    // Function 7
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"));
        return storageJobs ?? [];
    });

    const handleSubmit2 = () => {
        setJobs((prev1) => {
            const newJobs = [...prev1, job];

            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs);

            return newJobs;
        });
        setJob("");
    };

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
            className="App"
        >
            {/* f1 */}
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            {/* f2 */}
            <h1>{JSON.stringify(contents)}</h1>
            <button onClick={handleUpdate}>Update</button>
            {/* f3 */}
            <div>
                <h1>{gift || "Chưa có danh sách nào"}</h1>
                <button onClick={handleRandom}>random</button>
            </div>
            {/* f4 */}
            <input onChange={(e) => setName(e.target.value)} value={name} />
            <button onClick={() => setName("Nguyễn Văn BBB")}>Change</button>
            {/* f5 */}

            <div>
                <input
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {/* f6 */}
            <div className="listCourse">
                {listCourse.map((course) => (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            checked={checked.includes(course.id)}
                            onChange={() => handleCheckIds(course.id)}
                        />
                        {course.name}
                    </div>
                ))}

                <button onClick={handlerRegister}>register</button>
            </div>
            {/* f7 */}
            <div className="input2">
                <input
                    type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <button onClick={handleSubmit2}>Add</button>

                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>{job}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
