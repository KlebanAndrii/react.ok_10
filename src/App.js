import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';


const Counter = () => {
    const counter = useSelector(({counter}) => counter)


    // const [counter, setCounter] = React.useState(1)

    return (
        <>
            <h1>counter: {counter}</h1>


            {/*<button onClick={() => {*/}
            {/*    setCounter(prev => prev +1)*/}
            {/*}}>inc*/}
            {/*</button>*/}

        </>
    )
}


function App() {

    const dispatch = useDispatch();
    const [isOn, setIsOn] = React.useState(true);
    const [value, setValue] = React.useState(0);

    return (
        <div>
            {isOn && <Counter/>}


            <div>
                <button onClick={() => {
                    setIsOn(prev => !prev)
                }}>toggle
                </button>
            </div>


            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>inc
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC'})
            }}>dec
            </button>
            <button onClick={() => {
                dispatch({type: 'RES'})
            }}>res
            </button>


            <input type="number" value={value} onChange={({target: {value}}) => setValue(value)}/>
            <button onClick={() => {
                dispatch({type: 'INC-CUSTOM', payload: Number(value)})
            }}>inc custom
            </button>
        </div>


    );
}

export default App;
