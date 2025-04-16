export const setToLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data)
}

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}