import changeSideBarState from './changeSideBarState';
import {userRegisterationReducer,userSponserInfoReducer} from "./user.reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeSideBarState,
    userRegisterationReducer,
    userSponserInfoReducer

})

export default rootReducer;