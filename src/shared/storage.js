class Storage {
  set = async (key, params) => {
    return localStorage.setItem(key, JSON.stringify(params))
  }

  get = async (key) => {
    const value = await localStorage.getItem(key)
     return JSON.parse(value)
  }

  clear = async () => {
   return localStorage.clear()
  }
}

export default new Storage()