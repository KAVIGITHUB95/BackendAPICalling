import axios from "axios";

const URL = "";

const api = axios.create({
    baseURL: URL,

});

export async function getUserById(id: number) {

    return (await api.get("/UserController/")).data;
    
}





export async function deleteUser(id: number) {

    await api.delete("/UserController/" + { id });
}


export async function getAllUsers() {
    
    return (await api.get("/Users")).data;
}