import { combineReducers, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../types';

import AuthSlice from './AuthSlice';
import { RESET_EVERYTHING } from './actions/ResetEverythingActions';

const reducers = combineReducers({
    auth: AuthSlice
});

const rootReducer = (state: RootState | undefined, action: PayloadAction) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === RESET_EVERYTHING) {
        state = undefined;
    }

    return reducers(state, action);
};

export default rootReducer;
