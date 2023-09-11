import axios from 'axios'
const token = localStorage.getItem('tokenParts')
export const instance = axios.create({
  baseURL: 'https://blackoutstore-be-iota.vercel.app'
});
export const instanceToken = axios.create({
  baseURL: 'https://blackoutstore-be-iota.vercel.app',
  headers: { Authorization: token },
  validateStatus: () => true
});