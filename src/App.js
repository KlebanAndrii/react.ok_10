import './App.css';
import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserDetailsComponent from "./components/user-details/UserDetailsComponent";
import PostsComponent from "./components/posts/PostsComponent";


function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}>to users</Link></div>
                <div><Link to={'posts'}>to posts</Link></div>
                <Switch>
                    <Route exact={true} path={'/users'} render={(props) => {
                        console.log(props)
                        return <Users {...props}/>
                    }}/>
                    <Route exact={true} path={'/users/:id'} render={
                        (props) => {
                            let {match: {params: {id}}} = props
                            console.log(id);
                            return <UserDetailsComponent userID={id}/>
                        }
                    }/>


                    <Route exact={true} path={'/posts'} render={() => <PostsComponent/>}/>




                </Switch>
            </div>
        </Router>
    );
}

export default App;
