import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api'

class Park {

  static all = async () => {
    const response = await axios.get(`${BASE_URL}/parks`)
    const parks = response.data.parks

    return parks
  }

  static find = async (id) => {
    const response = await axios.get(`${BASE_URL}/parks/${id}`)
    const park = response.data.park

    return park
  }

  static _validate (name, city, state) {
    const errors = []

    if (name.length < 5) errors.push(`Park Name must be at least 6 characters`)
    if (city.length < 5) errors.push(`City Name must be at least 6 characters`)
    if (!state) errors.push(`State is required`)

    return errors
  }

  static create = async ({ name, city, state }) => {
    const errors = Park._validate(name, city, state)
    if (errors.length) return { errors }

    const response = await axios.post(`${BASE_URL}/parks`, { name, city, state })
    const park = response.data.park

    return park
  }

  static update = async (id, { name, city, state }) => {
    const errors = Park._validate(name, city, state)
    if (errors.length) return { errors }

    const response = await axios.put(`${BASE_URL}/parks/${id}`, { name, city, state })
    const park = response.data.park

    return park
  }

  static destroy = async (id) => {
    const response = await axios.delete(`${BASE_URL}/parks/${id}`)
    const park = response.data.park

    return park
  }
}

export default Park
