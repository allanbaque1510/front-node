import axios from "./axios";


export const registerRequest = image => axios.post( `/register`, image);
export const loginRequest = image => axios.post( `/login`, image);
export const verifyToken = image => axios.get( `/verifyToken`, image);

