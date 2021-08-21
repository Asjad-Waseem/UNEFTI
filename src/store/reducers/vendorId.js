import { SET_VENDOR_ID } from '../actions/authedUser'

export default function vendorId( state = "", action) {
    switch(action.type) {
        case SET_VENDOR_ID: return action.vendorId
        default: return state
    }
}