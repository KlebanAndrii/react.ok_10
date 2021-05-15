import {
  Link,
    Switch
} from "react-router-dom";

export default function PostComponent({item, url}) {
  return (
    <div>
        {item.id} - {item.title} - <Link to={url + '/' + item.id} params={{post: item}}>post details</Link>

    </div>
  );
}