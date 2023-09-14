import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://blackoutstore-be-iota.vercel.app'
});
export const instanceToken = axios.create({
  baseURL: 'https://blackoutstore-be-iota.vercel.app',
  headers: { Authorization: localStorage.getItem('tokenParts') },
  validateStatus: () => true
});