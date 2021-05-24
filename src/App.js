import './App.css';
import {useEffect, useState} from "react";
import User from "./User";

function App() {


    let [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            })

    }, []);


    return (
        <div>
            {
                users.map(value => <User x={value}/>)
            }
        </div>
    );
}

export default App;
