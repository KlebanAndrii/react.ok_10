export default function Post({item, search}) {
    return (
        <div>
            {item.id} -
            <button onClick={() => search(item.id)}>details</button>
        </div>
    );
}

