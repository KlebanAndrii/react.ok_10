import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {createStore} from 'redux';

const initialState = {
    counter: 1
}

const reducer = (state = initialState, action) => {
    // console.log("called store changer", state, action);

    // if (action.type === 'INC') {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // }
    //
    // if (action.type === 'DEC') {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     }
    // }
    //
    // if (action.type === 'RES') {
    //     return {
    //         ...state,
    //         counter: 0
    //     }
    // }
    // if (action.type === 'INC-CUSTOM') {
    //     return {
    //         ...state,
    //         counter: state.counter = action.payload
    //     }
    // }
    // return state;

    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: state.counter +1
            };
        }
        case 'DEC': {
            return {
                ...state,
                counter: state.counter -1
            };
        }
        case 'RES': {
            return {
                ...state,
                counter: 0
            };
        }
        case 'INC-CUSTOM': {
            return {
                ...state,
                counter: state.counter = action.payload
            };
        }
        default:
            return state
    }

}

const store = createStore(reducer);
// store.subscribe(() => {
//     console.log(store.getState(), "!!!!!")
// });


// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'DEC'});
// store.dispatch({type: 'RES'});


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
