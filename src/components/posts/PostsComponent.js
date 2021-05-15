import {useEffect, useState} from "react";
import PostComponent from "../post/PostComponent";
import {getPosts} from "../../services/api.services";

export default function PostsComponent({url}) {


    let [posts, setPosts] = useState([])


    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    }, [])


    return (
        <div>
            {
                posts.map(value => <PostComponent
                    key={value.id}
                    item={value}
                    url={url}
                />)
            }
        </div>
    );
}
