import {useEffect, useState} from "react";
import Character from "../character/Character";
import {getCharacters} from "../services/api";


export default function Characters(props) {
    let {match: {url}} = props;


    let [characters, setCharacters] = useState([]);

    let [infCharacters, setInfCharacters] = useState(null);

    characters.map((character, index) => {
        character.id = index + 1
        return character
    })

    useEffect(() => {
        getCharacters().then(value => setCharacters([...value.data]))

    }, [])


    const search = (id) => {
        let findInfCharacter = characters.find(value => value.id === id);
        console.log(findInfCharacter);
        setInfCharacters(findInfCharacter);
    };


    return (
        <div className={'wrap'}>
            <div className={'inf-box'}>
                {
                    characters.map(value => <Character
                        key={value.id}
                        item={value}
                        url={url}
                        search={search}
                    />)
                }
            </div>

            <div className={'inf-find-box'}>

                {
                    infCharacters ? (<div>{infCharacters.id} - age - {infCharacters.age} </div>) : (
                        <div>characters not defined</div>)

                }
            </div>

        </div>

    );
}