import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AgentResponse, AppDispatch, AuthState, ErrorCode } from '../../types';

export const initialState: AuthState = {
    authUserDetail: null,
    authUserDetailLoading: false,
    errorCode: null
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveAuthUserDetail(state, action: PayloadAction<AgentResponse | null>) {
            state.authUserDetail = action.payload;
            state.errorCode = null;
        },

        changeAuthUserDetailLoading(state, action: PayloadAction<boolean>) {
            state.authUserDetailLoading = action.payload;
        },
        errorSavingAuthUserDetail(state, action: PayloadAction<ErrorCode>) {
            state.errorCode = action.payload;
        }
    }
});

export const {
    saveAuthUserDetail,
    changeAuthUserDetailLoading,
    errorSavingAuthUserDetail
} = AuthSlice.actions;

export const fetchAuthUserDetail =
    (changeLoading = true) =>
    async (dispatch: AppDispatch) => {
        if (changeLoading) {
            dispatch(changeAuthUserDetailLoading(true));
        }
        try {
            const data = null;
            await dispatch(saveAuthUserDetail(data));
        } catch (e) {
            dispatch(errorSavingAuthUserDetail(e as ErrorCode));
        } finally {
            if (changeLoading) {
                dispatch(changeAuthUserDetailLoading(false));
            }
        }
    };

export default AuthSlice.reducer;
