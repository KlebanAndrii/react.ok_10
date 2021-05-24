
// три варіанта як витянути х !

// //3
// export default function User({x}) {

export default function User(props) {

  //  //1  - найгірший варіант !!! НЕ ВИКОРИСТОВУВАТИ
   // let user = props.x;

 //  //2
    // let {x:user} = props;

    return (
        <div>
            User
        </div>
    );
}