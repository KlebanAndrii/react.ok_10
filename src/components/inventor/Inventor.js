import {Link} from "react-router-dom";

export default function Inventor(props) {

    let {item, url, search} = props;


    return (
        <div>

            <Link to={url}>
                <button onClick={() => search(item.id)}>{item.id} - inventor</button>
            </Link>
        </div>
    );
}