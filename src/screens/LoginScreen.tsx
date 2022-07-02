import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    AuthStackParams,
    ScreenRouteProps,
    StackScreenProps
} from '../../types';

interface LoginScreenProps
    extends StackScreenProps<AuthStackParams, 'LoginScreen'>,
        ScreenRouteProps<AuthStackParams, 'LoginScreen'> {}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('EntryScreen')}
            >
                <Text>Entry Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
