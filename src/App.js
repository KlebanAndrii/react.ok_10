import './App.css';
import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}>to users</Link></div>
                <div><Link to={'posts'}>to posts</Link></div>
                <Switch>
                    <Route path={'/users'} render={(props) => {
                        console.log(props)
                        return <Users/>;
                    }}/>

                    <Route path={'/posts'} render={() => <h1>post</h1>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
