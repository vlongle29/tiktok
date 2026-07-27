import { useState, useEffect } from "react";

const lesson = [
    {
        id: 1,
        name: "ReactJS là gì? Tại sao nên học Js",
    },
    {
        id: 2,
        name: "SPA/MPA là gì?",
    },
    {
        id: 3,
        name: "Arrow function",
    },
];

function Fakechat() {
    const [lessonId, setLessonId] = useState();

    useEffect(() => {
        const handleEvent = (e) => {
            console.log(e.detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleEvent);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleEvent);
        };
    }, [lessonId]);

    return (
        <div>
            <ul>
                {lesson.map((lesson) => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? "red" : "#333",
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fakechat;
