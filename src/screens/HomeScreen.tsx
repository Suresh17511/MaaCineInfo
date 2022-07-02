import { View, Text } from 'react-native';
import React from 'react';
import { MainStackParams, StackScreenProps } from '../../types';

interface HomeScreenScreenProps
    extends StackScreenProps<MainStackParams, 'HomeScreen'> {}

const HomeScreen: React.FC<HomeScreenScreenProps> = () => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
