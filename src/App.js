import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Inventory from "./components/inventory/Inventory";
import Characters from "./components/characters/Characters";

function App() {
    return (
        <Router>
            <div>
                <div className={'box-link'}>
                    <Link to={'/characters'}><h1>characters</h1></Link>

                    <Link to={'/inventory'}><h1>inventory</h1></Link>
                </div>

                <Switch>


                    <Route exact={true} path={'/characters'} render={(props) => {
                        return <Characters {...props}/>
                    }}/>
                    <Route exact={true} path={'/inventory'} render={(props) => {
                        return <Inventory {...props}/>
                    }}/>


                </Switch>

            </div>
        </Router>
    );
}

export default App;
