import {createRef} from "react";

export default function NonControlled() {


    let login = createRef()
    let password = createRef()

    function submit(e) {
        e.preventDefault()
        console.log(login.current.value);
        console.log(password.current.value)
    }

    return (
        <div>

            <form onSubmit={submit}>
                <input type="text" name={'login'} placeholder={'login'} ref={login}/>
                <input type="text" name={'password'} placeholder={'password'} ref={password}/>
                <button>send</button>
            </form>

        </div>
    );
}
