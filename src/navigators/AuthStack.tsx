import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from '../screens/EntryScreen';
import LoginScreen from '../screens/LoginScreen';
import { AuthStackParams } from '../../types';

const RootStack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="EntryScreen" component={EntryScreen} />
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        </RootStack.Navigator>
    );
};

export default AuthStack;
