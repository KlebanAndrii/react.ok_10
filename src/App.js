import './App.css';
import CharacterComponent from "./components/character.component";

function App() {
    return (
        <div>
            <CharacterComponent
                description={'Bart'}
                image={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}/>

            <CharacterComponent
                description={'Liza'}
                image={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>

            <CharacterComponent
                description={'Maggie'}
                image={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>

            <CharacterComponent
                description={'Homer'}
                image={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>

            <CharacterComponent
                description={'Marge'}
                image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
        </div>
    )
}


export default App;
