import axios from "./axios";


export const uploadImage = user => axios.post( `/uploadImage`, user);
export const viewImage = (id) => axios.get( `/imagen/${id}`);
export const viewAllImage = () => axios.get( `/allImage`);
