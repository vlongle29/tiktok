import React, { useState, useEffect } from "react";

function Content2() {
    // TH1: Uncomment this block for testing
    // useEffect(() => {
    //     console.log("mounted");
    // }, []);

    // TH2: Uncomment this block for testing
    // const [title, setTitle] = useState("");
    // useEffect(() => {
    //     document.title = title;
    // });

    // TH3: Data fetching example

    const tabs = ["posts", "comments", "albums"];
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [type]); // Adding 'type' to the dependency array to refetch data when type changes

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={
                        type === tab
                            ? { color: "#fff", background: "#333" }
                            : {}
                    }
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <h1>Hi anh em</h1>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />

            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
            {showGoToTop && (
                <button
                    style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default Content2;
