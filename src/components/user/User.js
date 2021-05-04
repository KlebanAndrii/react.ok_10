export default function User({item}) {

    return (
        <div className={'clickUser'}>
            <h1>{item.id} - {item.name} - {item.age}</h1>

            <h5>
                city - {item.address.city}
                <br/>
                street - {item.address.street}
                <br/>
                house - {item.address.number}

            </h5>

        </div>
    );
}