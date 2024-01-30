export const isAuth = () => !!localStorage.getItem('token')

export const getToken = () => JSON.parse(localStorage.getItem('token'))

export const getUser = () => JSON.parse(localStorage.getItem('user'))
