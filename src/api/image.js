import axios from "./axios";


export const uploadImage = user => axios.post( `/uploadImage`, user);
export const modifyImage = user => axios.post( `/modifyImage`, user);
export const viewAllImage = user => axios.get( `/allImage`, user);
