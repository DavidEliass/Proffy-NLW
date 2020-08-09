import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator();

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import Tabs from './Tabs';

function AppStack() {
    return (
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false, }}>
            <Screen name="Landing" component={Landing}/>
            <Screen name="GiveClasses" component={GiveClasses}/>
            <Screen name="Tabs" component={Tabs}/>
        </Navigator>
    </NavigationContainer>
    )
}

export default AppStack