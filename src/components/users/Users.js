import {useEffect, useState} from "react";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import {Route} from "react-router-dom";

export default function Users(props) {
let {match:{url}} = props;

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    }, []);

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} url={url}/>)
            }

            <Route path={'/users/:id'} component={UserDetails}/>
        </div>
    );
}