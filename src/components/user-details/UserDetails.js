import {useEffect, useState} from "react";
import {MyContext} from "../../App";

export default function UserDetails(props) {
    let {match: {params: {id}}, location: {state, search}} = props;
    let jsonObj = search.split('?obj=')[1];
   /* console.log(jsonObj);
    console.log(JSON.parse(jsonObj));*/

    let [user, setUser] = useState(null);

    useEffect(() => {
        setUser(state);
    }, [id]);


    return (
        <div>

            {user && JSON.stringify(user)}
            <hr/>
            <div>
                <MyContext.Consumer>
                    {
                        (val) => console.log(val)
                    }
                </MyContext.Consumer>
            </div>
            <hr/>
        </div>
    );
}

