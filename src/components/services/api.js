import axios from "axios";

let options = {baseURL: "https://api.sampleapis.com/futurama"};

let axiosInstance = axios.create(options);


const getCharacters = () => {
    return axiosInstance.get('/characters')
};


const getInventory = () => {
    return axiosInstance.get('/inventory')
};


export {
    getCharacters, getInventory, axiosInstance
}