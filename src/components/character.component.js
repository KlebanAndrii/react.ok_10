import './character.style.css';

function CharacterComponent(props) {

    let cls = '';
    if (props.description === 'Bart') {
        cls = 'bart-class'
    }
    if (props.description === 'Liza') {
        cls = 'liza-class'
    }
    if (props.description === 'Maggie') {
        cls = 'maggie-class'
    }
    if (props.description === 'Homer') {
        cls = 'homer-class'
    }
    if (props.description === 'Marge') {
        cls = 'marge-class'
    }

    return <div className={cls}>

        <h1>{props.description}</h1>
        <img src={props.image}
             alt=""/>


    </div>
}

export default CharacterComponent;