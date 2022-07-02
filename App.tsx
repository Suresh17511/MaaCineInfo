import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DecideAuthNavigator from './src/navigators/DecideAuthNavigator';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <NavigationContainer>
            <DecideAuthNavigator />
        </NavigationContainer>
    );
};

export default App;
