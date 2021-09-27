import {USER_SET_ACCESS_TOKEN, USER_SET_IS_LOGGED_IN, USER_SET_USER} from "../../config/types";


const initialState = {
    accessToken: "",
    isLoggedIn: false,
    user: {}
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SET_ACCESS_TOKEN:
            return {...state, accessToken: action.data}
        case USER_SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.data}
        case USER_SET_USER:
            return {...state, user: action.data}
        default:
            return state;
    }
}

export default UserReducer