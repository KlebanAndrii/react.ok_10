export default function User({item, choseUser}) {
    return (
        <div>
            <div>{item.username}</div>
            <img src={'logo192.png'} alt=""/>
            <div>
                <button onClick={() => choseUser(item.id)}>details</button>
            </div>
        </div>
    );
}
