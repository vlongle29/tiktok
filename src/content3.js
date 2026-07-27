import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content3() {
    const [posts, setPost] = useState([]);
    const [type, setType] = useState("posts");
    const [showToButton, setShowToButton] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => setPost(posts));
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowToButton(true);
            } else {
                setShowToButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        console.log("addEventListener"); /*test khi mounted */

        return () => {
            window.removeEventListener("scroll", handleScroll);
            console.log("removeEventListener"); /*test khi unmouted*/
        };
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

            {posts.map((post) => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
            {showToButton && (
                <button style={{ position: "fixed", right: 20, bottom: 20 }}>
                    click
                </button>
            )}
        </div>
    );
}

export default Content3;
