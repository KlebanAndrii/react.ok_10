import './App.css';
import Posts from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/Users";


function App() {
    return (
        <div>

            <Router>
                <Link to={'/posts'}>
                    <button>to posts</button>
                </Link>

                <Link to={'/users'}>
                    <button>to users</button>
                </Link>

                <Switch>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                </Switch>
            </Router>


        </div>
    );
}

export default App;