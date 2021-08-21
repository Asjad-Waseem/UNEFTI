import { combineReducers } from 'redux'
import authedUser from "./authedUser"
import authToken from "./authToken"
import otherStuff from "./otherStuff"
import vendorId from './vendorId'

export default combineReducers({
    authedUser,
    authToken,
    vendorId,
    changeState: otherStuff
})
