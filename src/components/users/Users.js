import {useEffect, useState} from "react";
import axiosInstance from "../services/api";
import User from "../user/User";
import './Users.css';


export default function Users() {

    let [users, setUsers] = useState([]);
    let [newsUser, setNewsUser] = useState(null);


    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers([...value.data]))
    }, []);


    const search = (id) => {
        let findUser = users.find(value => value.id === id);
        console.log(findUser);
        setNewsUser(findUser);
    }


    return (
        <div className={'wrap-user'}>
            <div className={'user-box'}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        search={search}/>)
                }

            </div>

            <div className={'find-user-box'}>

                {
                    newsUser ? (<h2>{newsUser.id} - {newsUser.username}</h2>) : (<div>user not defined</div>)
                }
            </div>
        </div>
    );
}