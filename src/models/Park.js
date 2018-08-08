import axios from 'axios'

class Park {
  static all = async () => {
    const response = await axios.get(`${window.BASE_URL}/parks`)
    const parks = response.data.parks

    return parks
  }

  static find = async (id) => {
    const response = await axios.get(`${window.BASE_URL}/parks/${id}`)
    const park = response.data.park

    return park
  }

  static destroy = async (id) => {
    const response = await axios.delete(`${window.BASE_URL}/parks/${id}`)
    const park = response.data.park

    return park
  }
}

export default Park
