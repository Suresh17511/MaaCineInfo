import { View, Text } from 'react-native';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';

interface Props {}

const DecideAuthNavigator: React.FC<Props> = () => {
    const {
        auth: { authUserDetail }
    } = useSelector((state: RootState) => state);

    return (
        <React.Fragment>
            {authUserDetail ? <MainStack /> : <AuthStack />}
        </React.Fragment>
    );
};

export default DecideAuthNavigator;
