import './App.css';
import NonControlled from "./components/NonControlled";
import Controlled from "./components/Controlled";
import ControlledForm from "./components/ControlledForm";

function App() {
    return (
        <div>
            <NonControlled/>
            <hr/>
            <Controlled/>
            <hr/>
            <ControlledForm/>
        </div>
    );
}

export default App;
