import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DecideAuthNavigator from './src/navigators/DecideAuthNavigator';
import { TailwindProvider } from 'tailwindcss-react-native';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <TailwindProvider>
            <NavigationContainer>
                <DecideAuthNavigator />
            </NavigationContainer>
        </TailwindProvider>
    );
};

export default App;
