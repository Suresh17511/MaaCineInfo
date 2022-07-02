import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AuthStackParams, StackScreenProps } from '../../types';
import { tailwind } from '../utils/tailwind';

interface EntryScreenProps
    extends StackScreenProps<AuthStackParams, 'EntryScreen'> {}

const EntryScreen: React.FC<EntryScreenProps> = ({ navigation }) => {
    return (
        <View
            style={tailwind(
                'w-full',
                'h-full',
                'flex',
                'justify-center',
                'items-center'
            )}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text style={tailwind('text-primary')}>Login Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EntryScreen;
