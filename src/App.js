import './App.css';
import {useState} from "react";
import Users from "./components/users/Users";

export default function App() {

    let [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(++counter);
    };

    const decrement = () => {
        setCounter(--counter);
    };

    const reset = () => {
        setCounter(0);
    };

    return (
        <div>

            <div className={'clickNumber'}>
                <h2>number = {counter}</h2>

                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>



            <div>
                <Users/>

            </div>

        </div>
    );
}


