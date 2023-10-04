import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://blackoutstore-be-iota.vercel.app'
});
export const instanceToken = axios.create({
  baseURL: 'https://blackoutstore-be-iota.vercel.app',
  headers: { Authorization: sessionStorage.getItem('tokenParts') },
  validateStatus: () => true
});