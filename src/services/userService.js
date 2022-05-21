import axios from "axios"
const baseUrl = import.meta.env.VITE_BACKEND_URL
// const baseUrl = "http://localhost:4000/api/user/login"


let token = null
const setToken = newToken => { token = `bearer ${newToken}` }
console.log(`token`, token)

const login = async (email, password) => {
  return axios.post(baseUrl, {
    email, password
  }).then(response => response.data)
  // const response = await axios.post(baseUrl, {
  //   email, password
  // })

  // return response.data
}

export default { login, setToken }