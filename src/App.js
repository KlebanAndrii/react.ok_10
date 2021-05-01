import './App.css';
import User from "./components/user/User";
import {useState} from "react";


let usersList = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


function App() {

    let [counter, setCounter] = useState(0);
    const increment = () => {
       counter++
       setCounter(counter);
       console.log(counter);
    };


    let [users, setUsers] = useState(usersList);

    const deleteUser = () => {
        users.pop();
        setUsers([...users]);
    }

    return (
        <div>

            <div>
                counter is {counter}
                <button onClick={increment}>increment</button>

            </div>


            <div>
                {
                    users.map((value, index) =>
                        <User key={index}
                              {...value}
                        />)
                }
                <button onClick={deleteUser}>delete user</button>
            </div>
        </div>
    );
}

export default App;
