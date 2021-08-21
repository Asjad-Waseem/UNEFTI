import { SET_AUTH_TOKEN } from "../actions/authedUser"

export default function authToken( state = null, action) {
    switch(action.type) {
        case SET_AUTH_TOKEN: return action.authToken
        default: return state
    }
}