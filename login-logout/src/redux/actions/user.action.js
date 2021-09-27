import * as types from "../../config/types"


export const setAccessToken = (accessToken = "") => ({
    type: types.USER_SET_ACCESS_TOKEN,
    data: accessToken
})

export const setIsLoggedIn = (isLoggedIn = false) => ({
    type: types.USER_SET_IS_LOGGED_IN,
    data: isLoggedIn
})

export const setUser = (user = {}) => ({
    type: types.USER_SET_USER,
    data: user
})

