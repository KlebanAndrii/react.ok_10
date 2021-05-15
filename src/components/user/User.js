import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function User({item, url}) {
    return (
        <div>
            {item.username} -
            <ul>
                <li><Link to={url + '/' + item.id}>user {item.id} details</Link></li>
                <li><Link to={url + '/' + item.id + '/posts'}>user posts</Link></li>
            </ul>
        </div>
    );
}
