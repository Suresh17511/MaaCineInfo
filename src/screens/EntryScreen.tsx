import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AuthStackParams, StackScreenProps } from '../../types';

interface EntryScreenProps
    extends StackScreenProps<AuthStackParams, 'EntryScreen'> {}

const EntryScreen: React.FC<EntryScreenProps> = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    <Text>Login Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EntryScreen;
