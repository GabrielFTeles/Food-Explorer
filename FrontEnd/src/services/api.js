import axios from 'axios';

export const api = axios.create({
  baseURL: "https://food-explorer-pu2n.onrender.com"
});
