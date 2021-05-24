import {useEffect, useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {...state, users: action.payload};
        case 'SET_USER':
            return {...state, user: action.payload};
        case 'SET_USER_ID':
            return {...state, userId: action.payload};
        default:
            return state;
    }

};


export default function ControlledForm() {


    let [state, dispatch] = useReducer(reducer, {users: [], user: null, userId: 0});
    let {users, user, userId} = state;

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'SET_USERS', payload: value});
            });
    }, []);


    useEffect(() => {
        if (userId > 0) {
            fetch('http://jsonplaceholder.typicode.com/users/' + userId)
                .then(value => value.json())
                .then(value => {
                    dispatch({type: 'SET_USER', payload: value});
                });
        }
    }, [userId]);


    function getUserDetails(e) {
        e.preventDefault();
        console.log(e.target.user.value)
    }


    function onSelect(e) {
        dispatch({type: 'SET_USER_ID', payload: e.target.value});
    }

    return (
        <div>

            <form onSubmit={getUserDetails}>
                <select name="user" onChange={onSelect}>
                    {
                        users.map(value => <option key={value.id} value={value.id}>{value.name}</option>)
                    }

                </select>

            </form>

            {user && <div>{JSON.stringify(user)}</div>}

        </div>
    );
}