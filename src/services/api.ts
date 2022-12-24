import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const GetBurgers = () => api.get("/burgers")
export const GetDrinks = () => api.get("/drinks")
export const GetPizzas = () => api.get("/pizzas")
export const GetIceCreams = () => api.get("/ice-creams")

export default api
