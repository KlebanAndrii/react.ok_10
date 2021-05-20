import {Link} from "react-router-dom";

export default function Character(props) {

    let {item, url, search} = props;

    return (
        <div>

            <Link to={url}>
                <button onClick={() => search(item.id)}>{item.id} - character</button>
            </Link>

        </div>
    );
}