import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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
