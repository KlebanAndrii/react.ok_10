import {useEffect, useReducer, useState} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_POSTS':
            return {...state, posts: action.payload}
        case 'ADD_POST':
            return {...state, singlePost: action.payload}
    }
}


export default function Posts() {

    let [state, dispatch] = useReducer(reducer, {posts: [], singlePost: null});
    let {posts, singlePost} = state;


    /*    let [posts, setPosts] = useState([])
        let [singlePost, setSinglePost] = useState(null)*/

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'ADD_POSTS', payload: value})
            })
    }, []);

    const postDetails = (id) => {
        let sp = posts.find(value => value.id == id)
        dispatch({type: 'ADD_POST', payload: sp})
    };


    return (
        <div>
            <div className={'single-post'}>
                {
                    singlePost && JSON.stringify(singlePost)
                }
            </div>
            <div className={'all-posts'}>
                {
                    posts.map(value => <div>{value.id} - {value.title} - <button
                        onClick={() => postDetails(value.id)}>details</button></div>)
                }
            </div>


        </div>
    );
}