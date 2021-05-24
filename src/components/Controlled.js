import {useState} from "react";

export default function Controlled() {


    /*    let [login, setLogin] = useState('default login')
        let [password, setPassword] = useState('')*/

    let [formState, setFormState] = useState({login: 'xxx', password: ''});
    let {login, password} = formState;


    function submit(e) {
        e.preventDefault();
    }

    /*    function onValueChange(e) {
            let value = e.target.value;
            setLogin(value);
        }

        function onValueChange2(e) {
            let value = e.target.value;
            setPassword(value);
        }*/

    function onValueChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setFormState({...formState, [name]: value});
    }

    return (
        <div>

            <form onSubmit={submit}>
                <input type="text" name={'login'} value={login} onChange={onValueChange}/>
                <input type="text" name={'password'} value={password} onChange={onValueChange}/>
                <button>send</button>

            </form>

        </div>
    );
}
