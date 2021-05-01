import './car.style.css';

export default function CarComponent(props) {

    let {model, description, power, volume, image, text} = props;

    return (
        <div>

            <h1>{model}</h1>
            <h3>{description}</h3>
            <h3>{power}</h3>
            <h3>{volume}</h3>
            <img src={image} alt=""/>
            <h5>{text}</h5>
            <br/>
        </div>
    )


}