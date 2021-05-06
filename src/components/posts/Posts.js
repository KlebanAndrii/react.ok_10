import {useEffect, useState} from "react";
import Post from "../post/Post";
import './Posts.css';
import axiosInstance from '../services/api';

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [newsPost, setNewsPost] = useState(null)

    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]))
    }, [])

    const search = (id) => {
        let findPost = posts.find(value => value.id === id);
        console.log(findPost);
        setNewsPost(findPost)
    }

    return (
        <div className={'wrap'}>

            <div className={'posts-box'}>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                        search={search}/>)
                }
            </div>

            <div className={'find-post-box'}>

                {
                    newsPost ? (<h2>{newsPost.id} - {newsPost.title} <br/>
                        {newsPost.body}</h2>) : (<div>post not defined</div>)
                }

            </div>

        </div>
    );
}
