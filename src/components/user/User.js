export default function User(props) {

    let {age, name, status} = props;

    return (
        <div>

            <h2>{name} {status.toString()}</h2>
            <div>{age}</div>


        </div>


    )
}