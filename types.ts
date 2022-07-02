import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import store from './src/slices/store';

export type AuthStackParams = {
    EntryScreen: undefined;
    LoginScreen: undefined;
};

export type MainStackParams = {
    HomeScreen: undefined;
};

export type ScreenRouteProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList
> = {
    route: RouteProp<ParamList, RouteName>;
};

export interface StackScreenProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList
> extends ScreenRouteProps<ParamList, RouteName> {
    navigation: StackNavigationProp<ParamList, RouteName>;
}

export interface RootState {
    auth: AuthState;
}

export interface AuthState {
    authUserDetailLoading: boolean;
    authUserDetail: AgentResponse | null;
    errorCode: ErrorCode | null;
}

export interface AgentResponse {
    id: string;
    fullName: string;
    email: string;
}

export enum ErrorCode {
    NOT_FOUND = 'NOT_FOUND',
    UNAUTHORIZED = 'UNAUTHORIZED',
    SERVER_ERROR = 'SERVER_ERROR',
    FORBIDDEN = 'FORBIDDEN'
}

export type AppDispatch = typeof store.dispatch;
