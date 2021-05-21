import {Link} from "react-router-dom";

export default function User({item, url}) {
    let path = url + '/' + item.id;

    return (
        <div>
            {item.id} - {item.name} -
            <Link to={{pathname: path, state: item, search: '?obj=' + JSON.stringify(item)}}>
                <button>details</button>
            </Link>
        </div>
    );
}