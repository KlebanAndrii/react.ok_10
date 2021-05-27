import './App.css';
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setIsLoading, setPosts, resetIsLoading, setError} from './redux';



const Posts = () => {
    const {isLoading, posts, error} = useSelector(({isLoading, posts, error}) => ({
        isLoading,
        posts,
        error

    }));
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            dispatch(setIsLoading());
            const response = await fetch('http://jsonplaceholder.typicode.com/posts')
            const payload = await response.json();

            dispatch(setPosts(payload));

        } catch (e) {
            console.log(e, 'kurva!')
            dispatch(resetIsLoading());

            dispatch(setError('Failed to fetch data'));
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);


    if (error) {
        return <h1>{error}</h1>
    }


    if (isLoading) {
        return <h1>Loading!</h1>
    }


    return (
        <div>{posts.map(post => (
            <h5 key={post.id}>{post.id} - ({post.title}) <br/> - {post.body}</h5>
        ))}</div>
    )
}


function App() {
    return (
        <div className="App">
            <Posts/>
        </div>
    );
}

export default App;

