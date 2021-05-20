import {useEffect, useState} from "react";
import {getInventory} from "../services/api";
import Inventor from "../inventor/Inventor";


export default function Inventory(props) {
    let {match: {url}} = props;

    let [inventory, setInventory] = useState([])
    let [infInventory, setInfInventory] = useState(null)

    useEffect(() => {
        getInventory().then(value => setInventory([...value.data]))
    }, [])


    const search = (id) => {
        let findInfInventor = inventory.find(value => value.id === id);
        console.log(findInfInventor);
        setInfInventory(findInfInventor);
    };

    return (
        <div className={'wrap'}>
            <div className={'inf-box'}>
                {
                    inventory.map(value => <Inventor
                        key={value.id}
                        item={value}
                        url={url}
                        search={search}
                    />)
                }
            </div>

            <div className={'inf-find-box'}>
                {
                    infInventory ? (<h2>{infInventory.id} - {infInventory.title} <br/>  {infInventory.category} <br/>
                        {infInventory.description} </h2>) : (<div>inventory not defined</div>)
                }
            </div>
        </div>
    );
}