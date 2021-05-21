import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/UserDetails";
import {createContext} from "react";
import Posts from "./components/posts/Posts";


export let MyContext = createContext('')


function App() {
    return (
        <Router>
            <MyContext.Provider value={'okten'}>
                <div>
                    <ul>
                        <li><Link to={"/"}>home</Link></li>
                        <li><Link to={"/about"}>about</Link></li>
                        <li><Link to={"/users"}>users</Link></li>
                    </ul>

                    <hr/>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home/>
                        </Route>

                        <Route path={'/about'} component={About}/>

                        <Route path={'/users'} render={(props) => {
                            return <Users {...props}/>
                        }}/>


                    </Switch>
                    <hr/>
                </div>
                <div>
                    <Posts/>
                </div>
            </MyContext.Provider>
        </Router>
    );
}

export default App;
