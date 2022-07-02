import { View, Text } from 'react-native';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

interface Props {}

const DecideAuthNavigator: React.FC<Props> = () => {
    return <>{!true ? <MainStack /> : <AuthStack />}</>;
};

export default DecideAuthNavigator;
