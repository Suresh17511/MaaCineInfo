import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DecideAuthNavigator from './src/navigators/DecideAuthNavigator';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider } from 'react-redux';
import store from './src/slices/store';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <TailwindProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <DecideAuthNavigator />
                </NavigationContainer>
            </Provider>
        </TailwindProvider>
    );
};

export default App;
