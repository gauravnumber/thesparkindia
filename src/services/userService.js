import axios from "axios"
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/user`
// const baseUrl = "http://localhost:4000/api/user/login"


let token = null
const setToken = newToken => { token = `bearer ${newToken}` }
// console.log(`token`, token)

const login = (email, password) => {
  return axios.post(`${baseUrl}/login`, {
    email, password
  }).then(response => response.data)
  // const response = await axios.post(baseUrl, {
  //   email, password
  // })

  // return response.data
}

const createAccount = async ({ name, email, password, confirmPassword, referal }) => {
  const response = await axios.post(`${baseUrl}/registeration`, { name, email, password, confirmPassword, referal })
  // const response = await axios.post(`${baseUrl}/registeration`, data)

  // console.log(`response`, response)
  return response.data
}

export default { login, setToken, createAccount }