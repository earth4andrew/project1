import React from "react";
import Axios from "Axios";

function Posts() {
    const [Posts, SetPosts] = React.useState([]);

    React.useEffect(() => {
        Axios
            .get("http://jsonplaceholder.typicode.com/posts")
            .then(response) => SetPosts(Response.data));
    }, []);

    return (
        <ul className="posts">
            {Posts.map((Post) => (
                <li className="post" key={Post.id}>
                    <h4>{Post.title}</h4>
                    <p>{Post.body}</p>
                </li>
            ))}
        </ul>
    );
}

export default posts;