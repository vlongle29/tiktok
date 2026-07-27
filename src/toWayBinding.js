import { useState } from "react";

const courses = [
    {
        id: 1,
        name: "HTMLCSS",
    },
    {
        id: 2,
        name: "Javascript",
    },
    {
        id: 3,
        name: "ReactJS",
    },
];



function ToWayBinding() {
    const [checked, setChecked] = useState([]);

    const handleCheck = (id) => {
        setChecked(prev => {
            const isCheck = checked.includes(id);
            if(isCheck) {
                return checked.filter(item => item !== id)
            }
            else {
                return [...prev, id]
            }
        })
    }

    const handleSubmit = () => {
        console.log({id: checked});
    }

    return (
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input type="checkbox"
                    onChange={() => handleCheck(course.id)} />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default ToWayBinding;
